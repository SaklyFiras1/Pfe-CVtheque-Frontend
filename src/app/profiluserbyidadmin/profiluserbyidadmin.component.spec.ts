import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfiluserbyidadminComponent } from './profiluserbyidadmin.component';

describe('ProfiluserbyidadminComponent', () => {
  let component: ProfiluserbyidadminComponent;
  let fixture: ComponentFixture<ProfiluserbyidadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfiluserbyidadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfiluserbyidadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
