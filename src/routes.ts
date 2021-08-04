import { request, response, Router } from "express";
import { createUserController, listAllUsersController, listUserByEmailController, updateUserController } from "./useCases/User";

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

router.put('/update-user', (request, response)=>{
    return updateUserController.handle(request, response)
})

export { router }