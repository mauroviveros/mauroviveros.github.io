import { Component } from "@angular/core";
import { SharedModule } from "../../shared/shared.module";
import { SocialComponent } from "../social/social.component";

import { COPYRIGHT, USER } from "../../../environments/environment";

@Component({
  selector: "portfolio-navbar",
  standalone: true,
  imports: [SharedModule, SocialComponent],
  templateUrl: "./navbar.component.html",
  styleUrl: "./navbar.component.scss",
})
export class NavbarComponent {
  readonly fullname = [...USER.names, ...USER.surnames].join(" ");
  readonly role = USER.roles.join(" | ");
  readonly profileURL = USER.profileURL;
  readonly copyright = COPYRIGHT;
}
