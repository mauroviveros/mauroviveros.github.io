import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CV } from "../../../environments/cv";

@Component({
  selector: "portfolio-hero",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./hero.component.html",
  styleUrl: "./hero.component.scss",
})
export class HeroComponent {
  readonly firstName = CV.basics.name.split(" ")[0];
  readonly summary = CV.basics.summary;
}
