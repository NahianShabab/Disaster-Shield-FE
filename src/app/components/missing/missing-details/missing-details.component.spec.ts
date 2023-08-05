import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissingDetailsComponent } from './missing-details.component';

describe('MissingDetailsComponent', () => {
  let component: MissingDetailsComponent;
  let fixture: ComponentFixture<MissingDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MissingDetailsComponent]
    });
    fixture = TestBed.createComponent(MissingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
