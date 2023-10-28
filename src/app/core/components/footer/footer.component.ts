import { Component } from "@angular/core";
import { COPYRIGHT } from "src/environments/environment";

@Component({
  selector: "core-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent {
  readonly copyright = COPYRIGHT;
}
