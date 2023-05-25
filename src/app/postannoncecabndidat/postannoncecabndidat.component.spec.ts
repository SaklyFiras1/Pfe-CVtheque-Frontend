import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostannoncecabndidatComponent } from './postannoncecabndidat.component';

describe('PostannoncecabndidatComponent', () => {
  let component: PostannoncecabndidatComponent;
  let fixture: ComponentFixture<PostannoncecabndidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostannoncecabndidatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostannoncecabndidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
