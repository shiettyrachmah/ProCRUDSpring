import { Component, OnInit, Output } from '@angular/core';
import { MahasiswaService } from '../../services/mahasiswaservice';
import { Mahasiswa } from '../../interfaces/mahasiswa';
import { SearchData } from '../../interfaces/searchData';

@Component({
  selector: 'app-list-mahasiswa',
  templateUrl: './list-mahasiswa.component.html',
  styleUrls: ['./list-mahasiswa.component.css']
})
export class ListMahasiswaComponent implements OnInit {
  mahasiswa:Mahasiswa[];
  searchData: SearchData = new SearchData();

  constructor(private mahasiswaService:MahasiswaService) {

   }

  ngOnInit() {
    this.loadDataMahasiswa();
  }

  onClickSearch(){
    this.mahasiswaService.search(this.searchData).subscribe(output=>{
      this.mahasiswa = output;
    }, error=>{
      console.log(error);
    })
  } 

  loadDataMahasiswa(){
    this.mahasiswaService.findAll().subscribe(
      output=>{
        this.mahasiswa = output;
      }, error=>{
        console.log(error);
      })
  }

  onClickEdit(getId){
    this.mahasiswaService.findAllById(getId).subscribe(
      data=>{
        this.mahasiswa = data;
      console.log(data);
      },error=>{
          console.error();
       });
  }

  onClickDel(getId) {
    this.mahasiswaService.delete(getId).subscribe(
      data=>{
        this.loadDataMahasiswa();
      },error=>{
         console.error();
      });
  }
 

}
