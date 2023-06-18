import Koa from 'koa';
import { router } from "./routes";
import { settings } from "./config";

function createApp() {
  const app = new Koa();
  app.use(router.routes()).use(router.allowedMethods());
  return app;
}

const app = createApp();
let server: any;

async function startWebServer() {
  return new Promise((resolve, reject) => {
    server = app.listen(settings.PORT, () => { resolve("Server done") });
    server.on("error", reject);
  })
}

export {
  app as webApp,
  server as webServer,
  startWebServer,
};
