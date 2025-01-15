import postgres from "postgres";
import { AutoRouter, IRequest } from "itty-router";

type CFArgs = [Env, ExecutionContext];

const router = AutoRouter<IRequest, CFArgs>();

router.get("/reblogs/:postId", async (request, env) => {
  const sql = postgres(env.DB_URL);

  return await sql`SELECT * FROM reblogs WHERE root_post_id = ${request.params.postId} ORDER BY reblog_post_id DESC`;
});

router.get("/media/key/:key", async (request, env) => {
  const sql = postgres(env.DB_URL);

  return await sql`SELECT * FROM media WHERE key = ${request.params.key}`;
});

router.get("/media/key_a/:key_a", async (request, env) => {
  const sql = postgres(env.DB_URL);

  return await sql`SELECT * FROM media WHERE key_a = ${request.params.key_a}`;
});

router.get("/media/key_b/:key_b", async (request, env) => {
  const sql = postgres(env.DB_URL);

  return await sql`SELECT * FROM media WHERE key_b = ${request.params.key_b}`;
});

router.get("/media/post/:postId", async (request, env) => {
  const sql = postgres(env.DB_URL);

  return await sql`SELECT * FROM media WHERE post_id = ${request.params.postId}`;
});

export default { ...router };
