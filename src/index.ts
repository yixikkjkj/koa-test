import Koa from 'koa';
import { router } from "./routes";

function createApp() {
  const app = new Koa();
  app.use(router.routes()).use(router.allowedMethods());
  return app;
}

const app = createApp();

app.listen(13000, () => {
  console.log("Koa started");
});
