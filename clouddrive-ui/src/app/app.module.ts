import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import {DataService} from './services/data.service';
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
    HttpModule,
    HttpClientModule,
    FormsModule,
=======
    FormsModule
>>>>>>> 8626b2446e277c4802aaeffc9fc2bbaef53f04c2
  ],
  providers: [ DataService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
