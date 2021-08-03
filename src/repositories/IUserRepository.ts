import { User } from "../entities/User";

export interface IUserRepository {
    findByEmail(email: string): Promise<User>;
    findAll(): Promise<any>;
    save(user: User): Promise<void>;
}