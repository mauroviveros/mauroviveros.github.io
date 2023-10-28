import { Component, inject } from "@angular/core";
import { Router } from "@angular/router";

interface Route {
  icon: string;
  path: string;
  text: string;
}

@Component({
  selector: "core-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent {
  private router = inject(Router);
  readonly routes: Route[] = this.router.config
    .filter(route => !!route.data && !!route.data["navigation"])
    .map(({ path, data }) => ({ path, ...(data ? data["navigation"] : {}) }));
}
