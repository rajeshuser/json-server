const jsonServer = require("json-server");
const cors = require("cors");

const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const router = jsonServer.router("db.json");

server.use(cors);
server.use(middlewares);
server.use(router);
const port = process.env.PORT || 3000;
server.listen(port, () => {
	console.log("JSON server is running at", `http://localhost:${port}`);
});
