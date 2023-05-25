import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilstaticannoncecandidatComponent } from './profilstaticannoncecandidat.component';

describe('ProfilstaticannoncecandidatComponent', () => {
  let component: ProfilstaticannoncecandidatComponent;
  let fixture: ComponentFixture<ProfilstaticannoncecandidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilstaticannoncecandidatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilstaticannoncecandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
