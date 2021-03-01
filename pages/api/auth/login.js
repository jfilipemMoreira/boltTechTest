import { PrismaClient } from '@prisma/client';

export default async function handler(req, res) {
    console.log("Arrived Login request")
    if (req.method === 'POST') {
        // Update or create data in your database
        const prisma = new PrismaClient();
        const response = await prisma.user.findMany({
            include: { projects: true },
            where: {
                name: String(req.body.username),
                password: String(req.body.password)
            }
        });
        const invalidResponse = {
            result: "failed"
        }
        if (!response || response.length == 0) {
            res.status(404)
            console.log("Response Failed")
            res.json(JSON.stringify(invalidResponse))
            return;
        }
        const user = response[0];
        if (!user) {
            res.status(404)
            console.log("Response Failed")
            res.json(JSON.stringify(successResponse))
            return;
        }
        const successResponse = {
            data: {
                id: user.id
            }
        }
        console.log("Response Success")
        res.status(202)
        res.json(JSON.stringify(successResponse))

    } else if (req.method === "GET") {
        res.json(JSON.stringify("ola"))
        res.status(202);
    } else {
        res.setHeader('Allow', ['POST'])
        res.status(405).end(`Method ${method} Not Allowed`)
    }
}
