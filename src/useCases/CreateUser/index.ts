import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider"
import { PostgresUsersRepository } from "../../repositories/implementations/PostgresUsersRepository"
import { CreateUserUseController } from "./CreateUserController"
import { CreateUserUseCase } from "./CreateUserUseCase"

const mailtrapMailProvider = new MailtrapMailProvider()
const postgresUsersRepository = new PostgresUsersRepository()

const createUserUseCase = new CreateUserUseCase(
    postgresUsersRepository,
    mailtrapMailProvider,
)

const createUserController = new CreateUserUseController (
    createUserUseCase
)

export { createUserUseCase, createUserController}