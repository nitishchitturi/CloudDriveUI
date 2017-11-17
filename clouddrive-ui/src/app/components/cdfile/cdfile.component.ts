import { Component, OnInit } from '@angular/core';
import { CDFile } from '../../cdfile';
import { CDFiles } from '../../mock-files';

@Component({
  selector: 'app-cdfile',
  templateUrl: './cdfile.component.html',
  styleUrls: ['./cdfile.component.css'],
  
})

export class CdfileComponent implements OnInit {
  
   cdfiles = CDFiles;
  
   selectedFile: CDFile;
  
  
   constructor() { 
  
   }
  
   ngOnInit() {
   }
  
   onSelect(cdfile: CDFile): void {
    
     this.selectedFile = cdfile;
    
 
   }
   
 }