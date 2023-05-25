import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConseilcarriereComponent } from './conseilcarriere.component';

describe('ConseilcarriereComponent', () => {
  let component: ConseilcarriereComponent;
  let fixture: ComponentFixture<ConseilcarriereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConseilcarriereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConseilcarriereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
