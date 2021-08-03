import { Request, Response } from "express";
import { ListAllUsersUseCase } from "../../useCases/User/ListAllusersUseCase";

export class ListAllUsersController {
    constructor(
        private listAllUsersUseCase: ListAllUsersUseCase
    ){}

    async handle(req: Request, res: Response){
        try {
            const allUsers = await this.listAllUsersUseCase.execute()

            res.json(allUsers)
        } catch (error) {
            res.status(400).json({
                message: error.message || 'Unexpected error.'
            })
        }
    }
}