import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MahasiswaInsertComponent } from './mahasiswa-insert/mahasiswa-insert.component';
import { MahasiswaService } from '../services/mahasiswaservice';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ListMahasiswaComponent } from './list-mahasiswa/list-mahasiswa.component';
import { RouterModule } from '@angular/router';

export const AppRoute: any = [
  {path:"", component:AppComponent},
  {path:"listdata", component:ListMahasiswaComponent},
  {path:"insert", component:MahasiswaInsertComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MahasiswaInsertComponent,
    ListMahasiswaComponent
  ],
  imports: [ 
    HttpModule, //request web
    FormsModule, //form banding
    BrowserModule,
    RouterModule.forRoot(AppRoute,{useHash:true})
  ],
  providers: [
    MahasiswaService //service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
