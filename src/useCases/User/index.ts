import { CreateUserController } from "../../controllers/User/CreateUserController";
import { ListAllUsersController } from "../../controllers/User/ListAllUsersController";
import { PostgresUsersRepository } from "../../repositories/implementations/PostgresUsersRepository";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { ListAllUsersUseCase } from "./ListAllusersUseCase";

const postgresUsersRepository = new PostgresUsersRepository();

const createUserUseCase = new CreateUserUseCase(postgresUsersRepository);
const listAllUsersUseCase = new ListAllUsersUseCase(postgresUsersRepository);

const createUserController = new CreateUserController(createUserUseCase);
const listAllUsersController = new ListAllUsersController(listAllUsersUseCase)

export { createUserController, listAllUsersController }