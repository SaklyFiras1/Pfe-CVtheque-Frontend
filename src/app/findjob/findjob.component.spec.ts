import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindjobComponent } from './findjob.component';

describe('FindjobComponent', () => {
  let component: FindjobComponent;
  let fixture: ComponentFixture<FindjobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindjobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
