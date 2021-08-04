import { CreateUserController } from "../../controllers/User/CreateUserController";
import { ListAllUsersController } from "../../controllers/User/ListAllUsersController";
import { ListUserByEmailController } from "../../controllers/User/ListUserByEmailController";
import { PostgresUsersRepository } from "../../repositories/implementations/PostgresUsersRepository";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { ListAllUsersUseCase } from "./ListAllusersUseCase";
import { ListUserByEmailUseCase } from "./ListUserByEmailUseCase";

const postgresUsersRepository = new PostgresUsersRepository();

const createUserUseCase = new CreateUserUseCase(postgresUsersRepository);
const listAllUsersUseCase = new ListAllUsersUseCase(postgresUsersRepository);
const listUserByEmailUseCase = new ListUserByEmailUseCase(postgresUsersRepository);

const createUserController = new CreateUserController(createUserUseCase);
const listAllUsersController = new ListAllUsersController(listAllUsersUseCase);
const listUserByEmailController = new ListUserByEmailController(listUserByEmailUseCase);

export { createUserController, listAllUsersController, listUserByEmailController }