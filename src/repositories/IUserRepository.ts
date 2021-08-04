import { User } from "../entities/User";

export interface IUserRepository {
    findByEmail(email: string): Promise<User>;
    findById(id: string): Promise<any>
    findAll(): Promise<any>;
    save(user: User): Promise<void>;
}