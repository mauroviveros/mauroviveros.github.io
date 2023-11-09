import { Component, inject } from "@angular/core";
import { SharedModule } from "../../shared/shared.module";
import { SocialComponent } from "../social/social.component";

import { COPYRIGHT, USER } from "../../../environments/environment";
import { Router, RouterModule } from "@angular/router";

@Component({
  selector: "portfolio-navbar",
  standalone: true,
  imports: [RouterModule, SharedModule, SocialComponent],
  templateUrl: "./navbar.component.html",
  styleUrl: "./navbar.component.scss",
})
export class NavbarComponent {
  private readonly router = inject(Router);
  readonly fullname = [...USER.names, ...USER.surnames].join(" ");
  readonly role = USER.roles.join(" | ");
  readonly profileURL = USER.profileURL;
  readonly copyright = COPYRIGHT;
  readonly routerLinkActiveOptions = { exact: true };
  readonly menu = this.router.config.map(route => {
    return Object.assign({ path: route.path }, route.data ? route.data["navigation"] : {});
  });
}
