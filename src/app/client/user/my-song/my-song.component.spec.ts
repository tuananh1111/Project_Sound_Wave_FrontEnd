import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySongComponent } from './my-song.component';

describe('MySongComponent', () => {
  let component: MySongComponent;
  let fixture: ComponentFixture<MySongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MySongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MySongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
