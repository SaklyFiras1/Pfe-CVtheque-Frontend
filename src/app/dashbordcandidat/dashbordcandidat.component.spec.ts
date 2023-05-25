import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordcandidatComponent } from './dashbordcandidat.component';

describe('DashbordcandidatComponent', () => {
  let component: DashbordcandidatComponent;
  let fixture: ComponentFixture<DashbordcandidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashbordcandidatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashbordcandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
