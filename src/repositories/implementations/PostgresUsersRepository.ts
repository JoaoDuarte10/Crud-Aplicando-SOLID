import { pool, sqlExecute } from "../../database/Connection";
import { User } from "../../entities/User";
import { IUserRepository } from "../IUserRepository";
import { hash }  from 'bcryptjs'

export class PostgresUsersRepository implements IUserRepository {

    async findByEmail(email: string): Promise<User> {
        const sqlEmail = {
            text: 'SELECT email FROM users WHERE email=$1',
            values: [email]
        }
        const { rows } = await sqlExecute.query(sqlEmail.text, sqlEmail.values)

        return rows[0]
    }

    async findAll(): Promise<any> {
        const sqlAll = {
            text: 'SELECT * FROM users'
        }
        const { rows } = await pool.query(sqlAll)

        return rows
    }

    async save(user: User): Promise<void> {
        const passwordHash = await hash(user.password, 8)
        
        const sqlSave = {
            text: 'INSERT INTO users(name, email, password) VALUES($1, $2, $3)',
            values: [user.name, user.email, passwordHash]
        }
        try {
            await sqlExecute.query(sqlSave.text, sqlSave.values)
            
        } catch (error) {
            return error.message
        }
    }
}