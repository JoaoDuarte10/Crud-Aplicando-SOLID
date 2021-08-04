import { CreateUserController } from "../../controllers/User/CreateUserController";
import { ListAllUsersController } from "../../controllers/User/ListAllUsersController";
import { ListUserByEmailController } from "../../controllers/User/ListUserByEmailController";
import { UpdateUserController } from "../../controllers/User/UpdateUserController";
import { PostgresUsersRepository } from "../../repositories/implementations/PostgresUsersRepository";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { ListAllUsersUseCase } from "./ListAllusersUseCase";
import { ListUserByEmailUseCase } from "./ListUserByEmailUseCase";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

const postgresUsersRepository = new PostgresUsersRepository();

const createUserUseCase = new CreateUserUseCase(postgresUsersRepository);
const listAllUsersUseCase = new ListAllUsersUseCase(postgresUsersRepository);
const listUserByEmailUseCase = new ListUserByEmailUseCase(postgresUsersRepository);
const updateUserUseCase = new UpdateUserUseCase(postgresUsersRepository);

const createUserController = new CreateUserController(createUserUseCase);
const listAllUsersController = new ListAllUsersController(listAllUsersUseCase);
const listUserByEmailController = new ListUserByEmailController(listUserByEmailUseCase);
const updateUserController = new UpdateUserController(updateUserUseCase);

export { 
    createUserController, 
    listAllUsersController, 
    listUserByEmailController,
    updateUserController
}