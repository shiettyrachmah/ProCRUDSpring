import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MahasiswaInsertComponent } from './mahasiswa-insert.component';

describe('MahasiswaInsertComponent', () => {
  let component: MahasiswaInsertComponent;
  let fixture: ComponentFixture<MahasiswaInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MahasiswaInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MahasiswaInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
