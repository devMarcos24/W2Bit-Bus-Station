import "dotenv/config";
import setupApp from "./setupApp";

import "../database";

setupApp().then((app) => {
  app.listen(3333, () => {
    console.log("running on the port 3333");
  });
});
