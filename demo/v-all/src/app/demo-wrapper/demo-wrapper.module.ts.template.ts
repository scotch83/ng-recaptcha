function generate({
  angularVersion,
}: {
  angularVersion: 'v6' | 'v7' | 'v8' | 'v9' | 'v10',
}) {
  const materialImportsForV8AndOlder = `
import {
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatFormFieldModule,
  MatSelectModule,
  MatMenuModule,
  MatButtonToggleModule,
  MatRadioModule,
  MatSidenavModule,
  MatTabsModule,
  MatToolbarModule,
} from '@angular/material';
`.trim();
const materialImportsForV9AndNewer = `
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
`.trim();

  return `import { LayoutModule } from '@angular/cdk/layout'; // tslint:disable-line:no-submodule-imports
import { NgModule } from '@angular/core';
${['v6', 'v7', 'v8'].indexOf(angularVersion) >= 0 ? materialImportsForV8AndOlder : materialImportsForV9AndNewer}
import { BrowserModule } from '@angular/platform-browser';
// tslint:disable-next-line:no-submodule-imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DemoWrapperComponent, NAV_LINKS } from './demo-wrapper.component';
import { navLinks } from './demo-wrapper.data.auto-gen';
import { DemoWrapperRoutingModule } from "./demo-wrapper-routing.module";

@NgModule({
  bootstrap: [DemoWrapperComponent],
  declarations: [DemoWrapperComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatRadioModule,
    LayoutModule,
    DemoWrapperRoutingModule,
  ],
  exports: [
    DemoWrapperComponent,
  ],
  providers: [
    { provide: NAV_LINKS, useValue: navLinks },
  ],
})
export class DemoWrapperModule { }
`;
}

export const v6 = generate({ angularVersion: 'v6' });
export const v7 = generate({ angularVersion: 'v7' });
export const v8 = generate({ angularVersion: 'v8'  });
export const v9 = generate({ angularVersion: 'v9' });
export const v10 = generate({ angularVersion: 'v10' });
