import KoaRouter from 'koa-router';
import { router as helloRouter } from "./hello";

const router = new KoaRouter({prefix: "/api"});
router.use(helloRouter.routes());

export {
  router,
};
