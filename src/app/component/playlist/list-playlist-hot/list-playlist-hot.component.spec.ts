import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPlaylistHotComponent } from './list-playlist-hot.component';

describe('ListPlaylistHotComponent', () => {
  let component: ListPlaylistHotComponent;
  let fixture: ComponentFixture<ListPlaylistHotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPlaylistHotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPlaylistHotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
