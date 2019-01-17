"use strict";

module.exports = function(app) {
  var bunnies = require("../controllers/bunnyApiController");
  const apiRoute = "/api";

  app.route(apiRoute + "/bunnies")
    .get(bunnies.get_random_bunny)
    .post(bunnies.add_a_bunny);

  app.route(apiRoute + "/bunnies/:id")
    .get(bunnies.get_a_bunny)
    .delete(bunnies.delete_a_bunny);

  app.route(apiRoute + "/list")
    .get(bunnies.get_all_bunnies);
};
