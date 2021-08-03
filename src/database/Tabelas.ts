import { pool } from "./Connection"

class Tabelas {
    async createTabelas() {
        const tabelas = `
        CREATE EXTENSION IF NOT EXISTS "pgcrypto";

        CREATE TABLE IF NOT EXISTS users(
            id_user UUID PRIMARY KEY DEFAULT gen_random_uuid(), 
            name varchar(256) NOT NULL,
            email varchar(256) NOT NULL,
            password varchar(256) NOT NULL,
            created_at TIMESTAMP NOT NULL DEFAULT NOW()
        );
        `;
        pool.query(tabelas, (err)=>{
            if(err) console.log(err)
        })
    }
}

export { Tabelas }