import { pool } from "../connect.js";

export const apiGet = async (req, res) => {
 try {
  const q = 'SELECT * FROM pacientes';
  const [rows] = await pool.query(q)
  return res.status(200).json(rows)
 } catch (error) {
  console.log(error)
  return res.status(500).json(error)
 }
}
export const apiPost = async (req, res) => {
  try {
    const q = 'INSERT INTO pacientes (nombre, apellido, correo) values (?,?,?)'
    const values = [
      req.body.nombre,
      req.body.apellido,
      req.body.correo
    ]
    const [rows] = await pool.query(q, values)
    return res.status(200).json(rows)
  } catch (error) {
    console.log(error)
    return res.status(500).json(error)
  }
}

export const apiUpdate = async (req, res) => {

}
export const apiDelete = async (req, res) => {

}