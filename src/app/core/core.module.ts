import { NgModule } from "@angular/core";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { SocialComponent } from "./components/social/social.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [NavbarComponent, HeaderComponent, FooterComponent, SocialComponent],
  imports: [SharedModule],
  exports: [NavbarComponent],
})
export class CoreModule {}
