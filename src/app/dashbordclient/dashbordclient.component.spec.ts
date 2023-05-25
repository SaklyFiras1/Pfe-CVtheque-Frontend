import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordclientComponent } from './dashbordclient.component';

describe('DashbordclientComponent', () => {
  let component: DashbordclientComponent;
  let fixture: ComponentFixture<DashbordclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashbordclientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashbordclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
