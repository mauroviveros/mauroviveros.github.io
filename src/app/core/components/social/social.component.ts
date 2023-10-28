import { Component } from "@angular/core";
import { SOCIALS } from "src/environments/environment";

@Component({
  selector: "core-social",
  templateUrl: "./social.component.html",
  styleUrls: ["./social.component.scss"],
})
export class SocialComponent {
  readonly socials = SOCIALS;
}
