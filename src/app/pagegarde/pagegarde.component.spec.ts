import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagegardeComponent } from './pagegarde.component';

describe('PagegardeComponent', () => {
  let component: PagegardeComponent;
  let fixture: ComponentFixture<PagegardeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagegardeComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagegardeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
