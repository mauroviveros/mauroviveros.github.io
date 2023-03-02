import { NgModule } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

import { MatBottomSheetModule } from "@angular/material/bottom-sheet";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule, MatIconRegistry } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTooltipModule } from "@angular/material/tooltip";


import { loadSvgResources } from "src/assets/icons";

@NgModule({
  exports: [
    MatBottomSheetModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatTooltipModule
  ]
})
export class SharedModule { 
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer){
    loadSvgResources(matIconRegistry, domSanitizer);
  }
}
