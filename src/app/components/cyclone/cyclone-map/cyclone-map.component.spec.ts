import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CycloneMapComponent } from './cyclone-map.component';

describe('CycloneMapComponent', () => {
  let component: CycloneMapComponent;
  let fixture: ComponentFixture<CycloneMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CycloneMapComponent]
    });
    fixture = TestBed.createComponent(CycloneMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
