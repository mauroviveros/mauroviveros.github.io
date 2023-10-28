import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { CoreModule } from "./core/core.module";

@Component({
  selector: "portfolio-root",
  standalone: true,
  imports: [CommonModule, RouterOutlet, CoreModule],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {}
