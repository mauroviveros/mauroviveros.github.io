import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    loadComponent: () => import("./modules/home/home.component").then(m => m.HomeComponent),
    data: {
      navigation: { icon: "home", text: "Inicio" },
    },
  },
];
