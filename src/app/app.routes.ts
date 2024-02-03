import { Routes } from "@angular/router";
import { AboutComponent } from "./modules/about/about.component";
import { HomeComponent } from "./modules/home/home.component";

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    data: {
      navigation: { icon: "home", text: "home" },
    },
  },
  {
    path: "about",
    component: AboutComponent,
    data: {
      navigation: { icon: "badge", text: "about" },
    },
  },
];
