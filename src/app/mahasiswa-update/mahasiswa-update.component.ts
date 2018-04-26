import { Component, OnInit } from '@angular/core';
import { Mahasiswa } from '../../interfaces/mahasiswa';
import { MahasiswaService } from '../../services/mahasiswaservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mahasiswa-update',
  templateUrl: './mahasiswa-update.component.html',
  styleUrls: ['./mahasiswa-update.component.css']
})
export class MahasiswaUpdateComponent implements OnInit {

  mahasiswa: Mahasiswa = new Mahasiswa();

  constructor(
    private mahasiswaService: MahasiswaService, 
    private router:Router) { //inject Router untuk setting router pindah page

  }

  ngOnInit() {
    this.mahasiswa=this.mahasiswaService.getter(this.mahasiswa);
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
