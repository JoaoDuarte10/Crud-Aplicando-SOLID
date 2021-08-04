import { request, response, Router } from "express";
import { createUserController, listAllUsersController, listUserByEmailController } from "./useCases/User";

const router = Router();

router.get('/all-users', (request, response)=>{
    return listAllUsersController.handle(request, response)
})
router.get('/user/:id', (request, response)=>{
    return listUserByEmailController.handle(request, response)
})

router.post('/new-user', (request, response)=>{
    return createUserController.handle(request, response)
})

export { router }