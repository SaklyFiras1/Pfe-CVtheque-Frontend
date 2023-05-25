import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilstaticComponent } from './profilstatic.component';

describe('ProfilstaticComponent', () => {
  let component: ProfilstaticComponent;
  let fixture: ComponentFixture<ProfilstaticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilstaticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilstaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
