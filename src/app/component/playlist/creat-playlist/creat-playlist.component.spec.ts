import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatPlaylistComponent } from './creat-playlist.component';

describe('CreatPlaylistComponent', () => {
  let component: CreatPlaylistComponent;
  let fixture: ComponentFixture<CreatPlaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatPlaylistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
