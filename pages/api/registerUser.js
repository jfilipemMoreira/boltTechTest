import { PrismaClient } from '@prisma/client';

export default async function handler(req, res) {
    console.log("Adding project")
    if (req.method === 'POST') {
        // Update or create data in your database
        const prisma = new PrismaClient();
        const createdUser = await prisma.user.create({
            data :   req.body
        });
        console.log(createdUser)
        const invalidResponse = {
            result: "failed"
        }
        if (createdUser == null) {
            res.status(404)
            console.log("Response Failed")
            res.json(JSON.stringify(invalidResponse))
            return;
        }

        const successResponse = {
            data: {
                id: createdUser.id
            }
        }
        console.log("Response Success")
        res.status(202)
        res.json(JSON.stringify(successResponse))
    } else {
        res.setHeader('Allow', ['POST'])
        res.status(405).end(`Method ${method} Not Allowed`)
    }
}
