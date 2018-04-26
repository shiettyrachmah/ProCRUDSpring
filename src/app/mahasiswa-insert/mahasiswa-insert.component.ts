import { Component, OnInit, Output } from '@angular/core';
import { Mahasiswa } from '../../interfaces/mahasiswa';
import { MahasiswaService } from '../../services/mahasiswaservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mahasiswa-insert',
  templateUrl: './mahasiswa-insert.component.html',
  styleUrls: ['./mahasiswa-insert.component.css']
})
export class MahasiswaInsertComponent implements OnInit {
  
  mahasiswa: Mahasiswa = new Mahasiswa();

  constructor(
    private mahasiswaService: MahasiswaService, 
    private router:Router) { //inject Router untuk setting router pindah page

  }

  ngOnInit() {
  }

  onClickSave(){
    this.mahasiswaService.save(this.mahasiswa).subscribe(
      data=>{
         console.log(data);
        this.router.navigate(["listdata"]);
      },error=>{
         console.error();
      });
  }

 }
