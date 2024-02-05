import { Component } from "@angular/core";
import { SharedModule } from "../../shared/shared.module";

import { CV } from "../../../environments/cv";

@Component({
  selector: "portfolio-social",
  standalone: true,
  imports: [SharedModule],
  templateUrl: "./social.component.html",
  styleUrl: "./social.component.scss",
})
export class SocialComponent {
  readonly socials = CV.basics.profiles;
}
