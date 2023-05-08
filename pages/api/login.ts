import { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcrypt'
import prisma from '@/libs/prismadb'
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        return res.status(405).end()
    }

    try {
        const { email, password } = req.body

        const user = await prisma.user.findUnique({
            where: {
                email: email,
            },
        })

        if (!user) {
            return res.status(401).end()
        }

        const hashedPassword = await bcrypt.hash(password, 12)
        if (user.hashedPassword !== hashedPassword) {
            return res.status(401).end()
        }
        res.status(200).json(user)
    } catch (error) {
        console.error(error)
        return res.status(400).end()
    }
}
