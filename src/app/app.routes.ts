import { Routes } from "@angular/router";
import { AboutComponent } from "./modules/about/about.component";
import { HeroComponent } from "./modules/hero/hero.component";
import { ExperienceComponent } from "./modules/experience/experience.component";

export const routes: Routes = [
  {
    path: "",
    component: HeroComponent,
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
  {
    path: "experience",
    component: ExperienceComponent,
    data: {
      navigation: { icon: "memory", text: "experience" },
    },
  },
];
