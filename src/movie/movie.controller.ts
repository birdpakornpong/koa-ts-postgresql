import { Context } from "koa";
import * as Router from "koa-router";

const routerOpts: Router.IRouterOptions = {
  prefix: "/movies",
};

const router: Router = new Router(routerOpts);

router.get("/", async (ctx: Context) => {
  ctx.body = "GET ALL";
});

export default router;
