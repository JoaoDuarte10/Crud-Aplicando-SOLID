import { IUserRepository } from "../../repositories/IUserRepository";

export class ListAllUsersUseCase {
    constructor(
        private usersRepository: IUserRepository
    ){}

    async execute(){
        return await this.usersRepository.findAll()
    }
}