import { Request, Response } from "express";
import { UpdateUserUseCase } from "../../useCases/User/UpdateUserUseCase";

export class UpdateUserController {
    constructor(
        private updateUserUseCase: UpdateUserUseCase
    ){}

    async handle(req: Request, res: Response): Promise<Response> {
        const id = req.header('id')
        const { name, email, password } = req.body;

        if(name === "")  return res.json({error: 'Preencha os campos corretamente!'})
        if(!email || email === "") return res.json({error: 'Preencha os campos corretamente!'})
        if(password === "") return res.json({error: 'Preencha os campos corretamente!'})

        try {
            const updateUser = await this.updateUserUseCase.execute({name, email, password, id})

            return res.status(200).json({
                message: "Usuário atualizado com sucesso!"
            })
        } catch (error) {
            res.status(400).json({
                message: error.message || 'Unexpected error.'
            })
        }
    }
}