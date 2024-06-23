
import { User } from "@/interfaces";
import { IUserRepository } from "@/repositories/http/userRepository";



/**
 * 1- Verificar se usarios estão ativos 
 * 2 - Definir pagantes
 * 3 - Alterar formato last_activity para ISO-86 
 * 4- Aplicar mascara para emails de acordo com as regras 
 */


export class UserService {

    private repository: IUserRepository;

    constructor(repository: IUserRepository) {
        this.repository = repository;
    }

    async getUsers(): Promise<User[] | null> {
        let users = await this.repository.getMockUsers();

        if (!users) {
            return null;
        }
        let activeUsers = users.filter(user => user.status === 'enabled');
        let payers = activeUsers.filter(user => (user.role === 'editor' || user.role === 'admin'));
        const updatedUsers = users.map(user => {

            const pagadores = payers.some(item => item.id === user.id);
            user.isPayer = pagadores ? true : false;

            user.last_activity = new Date(user.last_activity).toISOString();

            if (!user.email.endsWith('@niuco.com.br')) {
                user.email = this.applyEmailMask(user.email);
            }

            return user;
        });

        return updatedUsers;
    }

    applyEmailMask(email: string): string {
        const [alias, domain] = email.split('@');
        if (alias.length <= 4) {
            return email;
        }

        const maskedAlias = alias.substring(0, 2) + '*'.repeat(alias.length - 4) + alias.substring(alias.length - 2);
        return `${maskedAlias}@${domain}`;
    }
}