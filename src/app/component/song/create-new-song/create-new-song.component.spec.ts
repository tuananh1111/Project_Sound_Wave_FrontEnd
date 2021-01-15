import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewSongComponent } from './create-new-song.component';

describe('CreateNewSongComponent', () => {
  let component: CreateNewSongComponent;
  let fixture: ComponentFixture<CreateNewSongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNewSongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
