import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "portfolio-about",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./about.component.html",
  styleUrls: ["../../shared/scss/layout.scss", "./about.component.scss"],
})
export class AboutComponent {}
