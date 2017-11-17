import { Component, OnInit } from '@angular/core';
import {DataService } from '../../services/data.service'
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

   cdFile = {
     name:'',
     path:'',
     SHA:'',
     type:'',
   }
  
  
   constructor(public dataservice: DataService) { 
  
   }
  
   ngOnInit() {
   }
  
   onSelect(cdfile: CDFile): void {
    
     this.selectedFile = cdfile;
    
 
   }
<<<<<<< HEAD

   uploadFile(){
     console.log("upload function clicked");
     this.dataservice.addCdFile(this.cdFile).subscribe(cdFile =>{
       this.cdfiles.unshift(cdFile)
     });
   }

   onDeleteClick(){
     console.log("delete button clicked");
     
   }
=======
>>>>>>> 8626b2446e277c4802aaeffc9fc2bbaef53f04c2
   
 }