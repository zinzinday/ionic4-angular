import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnlockedComponent } from './unlocked.component';

describe('UnlockedComponent', () => {
  let component: UnlockedComponent;
  let fixture: ComponentFixture<UnlockedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnlockedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnlockedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
