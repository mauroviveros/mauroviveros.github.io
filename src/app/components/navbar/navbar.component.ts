import { Component, inject } from "@angular/core";
import { SharedModule } from "../../shared/shared.module";
import { SocialComponent } from "../social/social.component";

import { Router, RouterModule } from "@angular/router";

import { CV } from "../../../environments/cv";

const COPYRIGHT = {
  year: 2022,
  owner: "Mauro Daniel Viveros",
  site: "https://github.com/maurodviveros",
};

@Component({
  selector: "portfolio-navbar",
  standalone: true,
  imports: [RouterModule, SharedModule, SocialComponent],
  templateUrl: "./navbar.component.html",
  styleUrl: "./navbar.component.scss",
})
export class NavbarComponent {
  private readonly router = inject(Router);
  readonly fullname = CV.basics.name;
  readonly role = CV.basics.label;
  readonly profileURL = CV.basics.image;
  readonly copyright = COPYRIGHT;
  readonly routerLinkActiveOptions = { exact: true };
  readonly menu = this.router.config.map(route => Object.assign({ path: route.path }, route.data ? route.data["navigation"] : {}));
}
