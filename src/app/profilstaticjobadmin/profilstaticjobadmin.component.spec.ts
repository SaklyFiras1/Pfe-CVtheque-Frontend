import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilstaticjobadminComponent } from './profilstaticjobadmin.component';

describe('ProfilstaticjobadminComponent', () => {
  let component: ProfilstaticjobadminComponent;
  let fixture: ComponentFixture<ProfilstaticjobadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilstaticjobadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilstaticjobadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
