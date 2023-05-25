import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilstaticjobComponent } from './profilstaticjob.component';

describe('ProfilstaticjobComponent', () => {
  let component: ProfilstaticjobComponent;
  let fixture: ComponentFixture<ProfilstaticjobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilstaticjobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilstaticjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
