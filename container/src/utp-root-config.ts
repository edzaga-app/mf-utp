import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@utp/mf-header",
  app: () => System.import("@utp/mf-header"),
  activeWhen: ["/"]
});

registerApplication({
  name: "@utp/mf-sidenav",
  app: () => System.import("@utp/mf-sidenav"),
  activeWhen: ["/"]
});

registerApplication({
  name: "@utp/mf-hiring",
  app: () => System.import("@utp/mf-hiring"),
  activeWhen: ["/"]
});

start({
  urlRerouteOnly: true,
});
