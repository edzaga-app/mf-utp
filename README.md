# mf-utp Implementación de arquitectura de Micro Frontend

Pasos para crear micro frontend

0. Para crear un Micro Frontend CLI
1. create-single-spa
2. -> single-spa application / parcel
3. Selecciona la tecnología en la que se va a desarrollar Angular, React, Vue, Otra.
4. Luego definir el nombre del proyecto. Se define la convención mf-nombredelmicrofrontend ejemplo mf-navigation

5. Reemplazar app.routing.module.ts

import { APP_BASE_HREF } from "@angular/common";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EmptyRouteComponent } from "./empty-route/empty-route.component";

const routes: Routes = [{ path: "**", component: EmptyRouteComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: "/" }],
})
export class AppRoutingModule {}

Adicionalmente en el app.module se agrega el EmptyRouteComponent

declarations: [AppComponent, EmptyRouteComponent];