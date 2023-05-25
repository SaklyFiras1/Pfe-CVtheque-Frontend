import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerecrutementComponent } from './managerecrutement.component';

describe('ManagerecrutementComponent', () => {
  let component: ManagerecrutementComponent;
  let fixture: ComponentFixture<ManagerecrutementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerecrutementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerecrutementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
