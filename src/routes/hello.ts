import KoaRouter from 'koa-router';
import * as helloAction from '~/actions/hello';

const router = new KoaRouter({prefix: "/hello"});

router.get("/", async (ctx, next) => {
  ctx.body = { msg: await helloAction.helloWorld() };
  await next();
});

export {
  router,
};
