const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 *
 * GET: Buscar/listar uma informação no back-end
 * POST: Criar uma informação no back-ande
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de Parâmetros
 *
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição utilizado para criar ou auterar recursos
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Micrisift SQL Server
 * NoSQL: MongoDB, CouchDQ, etc
 */

/**
 * Driver: SELECT * FROM users
 * Query builder: table('users').select('*').where()
 */