import { User } from "../entities/User";
import { ICreateUserRequestDTO } from "../useCases/User/CreateUserDTO";

export interface IUserRepository {
    findByEmail(email: string): Promise<User>;
    findById(id: string): Promise<any>
    findAll(): Promise<any>;
    save(user: User): Promise<void>;
    update(name: string, email: string, password: string, id?: string): Promise<void>;
}