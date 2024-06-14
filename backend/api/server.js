const jsonServer = require("json-server");
const server = jsonServer.create();
const middlewares = jsonServer.defaults();

const fs = require("fs");
const path = require("path");

// Path to the db.json in the project root
const filePath = path.join(__dirname, "db.json");

try {
  // Read the db.json file
  const data = fs.readFileSync(filePath, "utf-8");
  const db = JSON.parse(data);

  // Write the data to a temporary file in the /tmp directory
  const tmpDir = "/tmp";
  const tmpFilePath = path.join(tmpDir, "db.json");
  fs.writeFileSync(tmpFilePath, JSON.stringify(db), "utf8");

  // Create a router that uses the temporary file
  const router = jsonServer.router(tmpFilePath);

  server.use(middlewares);
  server.use(router);

  console.log("JSON Server is running");
} catch (error) {
  console.error("Error reading or writing db.json:", error);
}

module.exports = server;
