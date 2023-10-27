import { HttpClientModule } from "@angular/common/http";
import { NgModule, inject } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule, MatIconRegistry } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatTooltipModule } from "@angular/material/tooltip";
import { DomSanitizer } from "@angular/platform-browser";
import * as icons from "simple-icons";

@NgModule({
  imports: [HttpClientModule],
  exports: [MatButtonModule, MatIconModule, MatListModule, MatTooltipModule],
})
export class MaterialModule {
  private readonly iconRegistry = inject(MatIconRegistry);
  private readonly sanitizer = inject(DomSanitizer);
  constructor() {
    this.iconRegistry.addSvgIconLiteral("instagram", this.sanitizer.bypassSecurityTrustHtml(icons.siInstagram.svg));
    this.iconRegistry.addSvgIconLiteral("github", this.sanitizer.bypassSecurityTrustHtml(icons.siGithub.svg));
    this.iconRegistry.addSvgIconLiteral("linkedin", this.sanitizer.bypassSecurityTrustHtml(icons.siLinkedin.svg));
  }
}
