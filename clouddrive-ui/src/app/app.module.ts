import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { CdfileComponent } from './components/cdfile/cdfile.component';
<<<<<<< HEAD
import { CdfolderDetailComponent } from './components/cdfolder-detail/cdfolder-detail.component';
import { DataService } from './services/data.service';

=======
import { CdfiledetailsComponent } from './components/cdfiledetails/cdfiledetails.component';
>>>>>>> 132399bb5ea83e6aca2a83074c4b780bece650c0


@NgModule({
  declarations: [
    AppComponent,
    CdfileComponent,
    CdfiledetailsComponent
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
