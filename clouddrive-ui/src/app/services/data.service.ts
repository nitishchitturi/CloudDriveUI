'use strict';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map/';



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


/** Post a file or folder to the server  */
addCdFile(cdFile){
  console.log(cdFile);
  
  return this.http.get('')
  .map(res => res.json());
}

/** Delete a file or folder to the server  */
deleteCdFile(cdFile){
  console.log("the file to be deleted:" + cdFile);
  
  return this.http.delete('')
  .map(res => res.json());
}

}