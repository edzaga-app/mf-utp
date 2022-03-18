import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@utp/mf-nav",
  app: () => System.import("@utp/mf-nav"),
  activeWhen: ["/"]
});

start({
  urlRerouteOnly: true,
});
