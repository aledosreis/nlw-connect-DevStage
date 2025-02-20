import { fastify } from "fastify";
import { fastifyCors } from "@fastify/cors";

const app = fastify();

app.register(fastifyCors); // Em produção precisa especificar a URL do front end

app.get("/hello", () => {
  return "Hello World";
});

app.listen({ port: 3333 }).then(() => {
  console.log("HTTP server running!");
});
