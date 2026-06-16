require('dotenv').config();
const { Pool } = require('pg');


const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'UfersaMentor', // ou o nome que deu ao seu banco
  password: 'postgres',      // <--- COLOQUE A SENHA DIRETO AQUI (COM ASPAS)
  port: 5432,
});

pool.on('connect', () => {
  console.log('Conectado ao banco de dados PostgreSQL com sucesso!');
});

module.exports = pool;