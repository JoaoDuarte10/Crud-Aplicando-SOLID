import { request, response, Router } from "express";
import { createUserController, listAllUsersController } from "./useCases/User";

const router = Router();

router.get('/all-users', (request, response)=>{
    return listAllUsersController.handle(request, response)
})

router.post('/new-user', (request, response)=>{
    return createUserController.handle(request, response)
})

export { router }