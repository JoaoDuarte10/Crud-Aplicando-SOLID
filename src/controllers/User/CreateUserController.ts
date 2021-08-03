import { Request, Response } from "express";
import { CreateUserUseCase } from "../../useCases/User/CreateUserUseCase";

export class CreateUserController {
    constructor(
        private createUserUseCase: CreateUserUseCase
    ){}

    async handle(req: Request, res: Response): Promise<Response> {
        const { name, email, password } = req.body;

        if(!name || name === "")  return res.json({error: 'Preencha os campos corretamente!'})
        if(!email || email === "") return res.json({error: 'Preencha os campos corretamente!'})
        if(!password || password === "") return res.json({error: 'Preencha os campos corretamente!'})

        try {
            await this.createUserUseCase.execute({
                name,
                email,
                password
            })
            return res.status(201).json({message: 'Usuário criado com sucesso!'})
        } catch (error) {
            res.status(400).json({
                message: error.message || 'Unexpected error.'
            })
        }
    }
}