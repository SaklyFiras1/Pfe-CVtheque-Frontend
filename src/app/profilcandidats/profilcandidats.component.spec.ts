import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilcandidatsComponent } from './profilcandidats.component';

describe('ProfilcandidatsComponent', () => {
  let component: ProfilcandidatsComponent;
  let fixture: ComponentFixture<ProfilcandidatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilcandidatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilcandidatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
