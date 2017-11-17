import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CdfolderComponent } from './components/cdfolder/cdfolder.component';
import { CdfileComponent } from './components/cdfile/cdfile.component';
import { CdfolderDetailComponent } from './components/cdfolder-detail/cdfolder-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    CdfolderComponent,
    CdfileComponent,
    CdfolderDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
