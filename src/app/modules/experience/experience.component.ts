import { Component } from "@angular/core";
import { CV } from "../../../environments/cv";

@Component({
  selector: "portfolio-experience",
  standalone: true,
  imports: [],
  templateUrl: "./experience.component.html",
  styleUrls: ["../../shared/scss/layout.scss", "./experience.component.scss"],
})
export class ExperienceComponent {
  readonly works = CV.work;
}
