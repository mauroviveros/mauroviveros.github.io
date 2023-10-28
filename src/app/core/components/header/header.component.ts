import { Component } from "@angular/core";
import { USER } from "src/environments/environment";

@Component({
  selector: "core-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  readonly fullname = [...USER.names, ...USER.surnames].join(" ");
  readonly role = USER.roles.join(" | ");
  readonly profileURL = USER.profileURL;
}
