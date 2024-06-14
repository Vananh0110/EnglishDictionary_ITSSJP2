const jsonServer = require("json-server");
const server = jsonServer.create();
const middlewares = jsonServer.defaults();

const fs = require("fs");
const path = require("path");
const filePath = path.join("db.json");
const data = fs.readFileSync(filePath, "utf-8");
const db = JSON.parse(data);

const tmpDir = '/tmp';
const tmpFilePath = path.join(tmpDir, 'db.json');
fs.writeFileSync(tmpFilePath, JSON.stringify(db));

const router = jsonServer.router(tmpFilePath);

server.use(middlewares);
server.use(router);

module.exports = server;
