import { User } from "@/interfaces";
import axios, { AxiosError } from "axios";



const baseUrl = process.env.SERVER_HOST;

export interface IUserRepository {
    getMockUsers(): Promise<User[] | null>
}

export class UserRepository implements IUserRepository {

    public async getMockUsers(): Promise<User[] | null> {
        try {
            const response = await axios.get<User[]>(`${baseUrl}/users`);
            console.log(baseUrl);
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                this.handleAxiosError(error);
            } else {
                console.error('Erro 500:', error);
            }
            return null;
        }

    }

    private handleAxiosError(error: AxiosError) {
        if (error.response) {
            console.error('Erro na response:', error.response);
        }
        if (error.request) {
            console.error('Erro na requisicao:', error.request);
        }
        else {
            console.error('Erro :', error.message);
        }
    }

}