import { hash } from "bcryptjs";
import { IUserRepository } from "../../repositories/IUserRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class UpdateUserUseCase {
    constructor(
        private userRepository: IUserRepository
    ){}

    async execute(data: ICreateUserRequestDTO) {
        const passwordHash = await hash(data.password, 8)

        if(data.password.length < 8) throw new Error('A senha não pode ter menos de 8 dígitos!')

        await this.userRepository.update(data.name, data.email, passwordHash, data.id)
    }
}