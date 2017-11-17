import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { CdfolderComponent } from './components/cdfolder/cdfolder.component';
import { CdfileComponent } from './components/cdfile/cdfile.component';
import { CdfolderDetailComponent } from './components/cdfolder-detail/cdfolder-detail.component';
import { DataService } from './services/data.service';



@NgModule({
  declarations: [
    AppComponent,
    CdfolderComponent,
    CdfileComponent,
    CdfolderDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
  ],
  providers: [ DataService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
