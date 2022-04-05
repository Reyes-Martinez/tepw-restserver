const express = require("express");
const cors = require("cors");
const { dbConnection } = require("../database/config");
const authJwt = require("../auth/jwt");
class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    //*Api de post
    this.postPath = "/api/post";
    //*Api de comment
    this.commentPath = "/api/comment";
    //*Api de Category
    this.categoryPath = "/api/category";
    //*Api de User
    this.UserPath = "/api/user";
    //*Coneccion a la base de datos de
    this.connectedDb();
    //*Middelware
    this.Middelware();
    //*Rutas
    this.routes();
  }
  routes() {
    this.app.use(this.postPath, require("../router/postRouter"));
    this.app.use(this.commentPath, require("../router/commentRouter"));
    this.app.use(this.categoryPath, require("../router/categories"));
    this.app.use(this.UserPath, require("../router/userRoutes"));
  }
  async connectedDb() {
    await dbConnection();
  }
  Middelware() {
    //*CORS
    this.app.use(cors());
    //*Lectura y parseo del body
    this.app.use(express.json());
    //*Proteccion de las Rutas
    this.app.use(authJwt());
  }
  listen() {
    this.app.listen(this.port, () => {
      console.log(
        `Servidor corriendo en el puerto ${this.port}, http://localhost:${this.port}`
      );
    });
  }
}

module.exports = Server;
