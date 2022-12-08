import server from "./src/app.js";

const PORT = 4000;
server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
