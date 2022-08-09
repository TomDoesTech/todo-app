import fastify from "fastify";

export async function createServer() {
  const app = fastify();

  return app;
}
