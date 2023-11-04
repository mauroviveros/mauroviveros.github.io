import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { USER } from "src/environments/environment";

@Component({
  selector: "portfolio-home",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {
  readonly user = USER;
  readonly role = USER.roles.join(" | ");
}
