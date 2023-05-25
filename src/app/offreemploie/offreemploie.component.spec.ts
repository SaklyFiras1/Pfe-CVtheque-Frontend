import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreemploieComponent } from './offreemploie.component';

describe('OffreemploieComponent', () => {
  let component: OffreemploieComponent;
  let fixture: ComponentFixture<OffreemploieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffreemploieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffreemploieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
