import { NextApiRequest, NextApiResponse } from 'next';
import { AxiosError } from 'axios';
import { UserService } from '@/services/userService';
import { IUserRepository } from '@/repositories/http/userRepository';
import { UserRepository } from '@/repositories/http/userRepository';


async function getUsersHandler(userService: UserService): Promise<any> {
    try {
        const users = await userService.getUsers();
        return { status: 200, data: users };
    } catch (error) {
        console.error(error);
        if (error instanceof AxiosError) { 
            return { status: 400, data: 'Erro de processamento' };
        }
        return { status: 500, data: 'Internal Server Error' };
    }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        const userService = new UserService(new UserRepository() as IUserRepository);
        const result = await getUsersHandler(userService);
        res.status(result.status).json(result.data);
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}