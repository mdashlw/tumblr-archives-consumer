import postgres from "postgres";
import { AutoRouter, IRequest } from "itty-router";

type CFArgs = [Env, ExecutionContext];

const router = AutoRouter<IRequest, CFArgs>();

router.get("/reblogs/:postId", async (request, env) => {
  const sql = postgres(env.DB_URL);

  return await sql`SELECT * FROM reblogs WHERE root_post_id = ${request.params.postId} ORDER BY reblog_post_id DESC`;
});

export default { ...router };
