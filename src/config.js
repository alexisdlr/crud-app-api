import { config } from "dotenv"; 

config()

export const PORT = process.env.PORT || 3000
export const HOST = process.env.HOST || 'localhost'
export const USER = process.env.USER || 'root'
export const PASS = process.env.PASSWORD || '1111'
export const DB_PORT = process.env.DB_PORT || 3308
export const DATABASE = process.env.DATABASE || 'crud'