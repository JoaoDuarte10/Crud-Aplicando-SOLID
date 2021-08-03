import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/IUserRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
    constructor(
        private usersRepository: IUserRepository
    ){}

    async execute(data: ICreateUserRequestDTO) {
        const userAlreadyExist = await this.usersRepository.findByEmail(data.email)

        if(data.password.length < 8) throw new Error("A senha não pode ter menos de 8 dígitos!")

        if(userAlreadyExist) throw new Error('O usuário já existe!')

        const user = new User(data);

        await this.usersRepository.save(user)
    }
}