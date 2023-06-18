import { startWebServer, webServer } from "./server";

function stopWebServer() {
  webServer && webServer.close();
}

async function main() {
  await startWebServer();

  process.on("SIGINT", stopWebServer);
  process.on("SIGTERM", stopWebServer);
  process.on("SIGHUP", stopWebServer);

  await new Promise((resolve, reject) => {
    webServer && webServer.on("close", resolve);
    webServer && webServer.on("error", reject);
  });

  process.removeListener("SIGINT", stopWebServer);
  process.removeListener("SIGTERM", stopWebServer);
  process.removeListener("SIGHUP", stopWebServer);
}

main()
  .then(() => {
    console.log("Bye.");
  })
  .catch((err) => {
    setImmediate(() => {
      throw err;
    });
  });
