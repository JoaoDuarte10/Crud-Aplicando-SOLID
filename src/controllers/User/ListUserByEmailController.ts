import { Request, Response } from "express";
import { ListUserByEmailUseCase } from "../../useCases/User/ListUserByEmailUseCase";

export class ListUserByEmailController {
    constructor(
        private listUserByEmailUseCase: ListUserByEmailUseCase
    ){}

    async handle(req: Request, res: Response){
        const { id } = req.params;
        
        try {
            const findUser = await this.listUserByEmailUseCase.execute(id)

            res.json(findUser)
        } catch (error) {
            res.status(400).json({
                message: error.message || 'Unexpected error.'
            })
        }
    }
}