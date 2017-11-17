import { Component, OnInit, Input } from '@angular/core';
import { CDFile } from '../../cdfile';
 
@Component({
  selector: 'app-cdfile-details',
  templateUrl: './cdfiledetails.component.html',
  styleUrls: ['./cdfiledetails.component.css']
})
export class CdfiledetailsComponent implements OnInit {
  @Input() cdfile: CDFile;
  
  showOpenButton = true;
  
  constructor() { }
  validate(){

  }
  ngOnInit() {
    
  }
 
}