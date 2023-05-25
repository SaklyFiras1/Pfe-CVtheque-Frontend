import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbodadminComponent } from './dashbodadmin.component';

describe('DashbodadminComponent', () => {
  let component: DashbodadminComponent;
  let fixture: ComponentFixture<DashbodadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashbodadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashbodadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
