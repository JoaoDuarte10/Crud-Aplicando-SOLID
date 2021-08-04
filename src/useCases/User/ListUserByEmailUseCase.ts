import { IUserRepository } from "../../repositories/IUserRepository";

export class ListUserByEmailUseCase {
    constructor(
        private usersRepository: IUserRepository
    ){}

    async execute(id: string){
        return await this.usersRepository.findById(id)
    }
}