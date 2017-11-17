import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD

import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
=======
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'
import {DataService} from './services/data.service';
>>>>>>> 0d826ab37911f18b5594d6a80499cbe1b7c883b8
import { AppComponent } from './app.component';
import { CdfileComponent } from './components/cdfile/cdfile.component';
import { CdfiledetailsComponent } from './components/cdfiledetails/cdfiledetails.component';


@NgModule({
  declarations: [
    AppComponent,
    CdfileComponent,
    CdfiledetailsComponent
  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
    FormsModule
=======
    HttpModule,
    HttpClientModule,
>>>>>>> 0d826ab37911f18b5594d6a80499cbe1b7c883b8
  ],
  providers: [ DataService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
