import { PrismaClient } from '@prisma/client';

export default async function handler(req, res) {
    console.log("Task is over ")
    if (req.method === 'POST') {
        // Update or create data in your database
        const prisma = new PrismaClient();
        const response = await prisma.task.update({
            where: {
                id: Number(req.body.task),
            },
            data : {
                isFinished: true
            }
        });
        const invalidResponse = {
            result: "failed"
        }
        if (!response == 0) {
            res.status(404)
            console.log("Response Failed")
            res.json(JSON.stringify(invalidResponse))
            return;
        }
        console.log(response)
    } else {
        res.setHeader('Allow', ['POST'])
        res.status(405).end(`Method ${method} Not Allowed`)
    }
}
