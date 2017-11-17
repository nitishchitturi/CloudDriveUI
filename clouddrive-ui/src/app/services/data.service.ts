'use strict';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map/toPromise';



@Injectable()
export class DataService {

  cd
  


  constructor(public http: Http) { 
    console.log('Data Service Connected ...');
  }


/** GET list of files and folders from root server */
getCdFiles(){
  return this.http.get('')
  .map(res => res.json());
}



}