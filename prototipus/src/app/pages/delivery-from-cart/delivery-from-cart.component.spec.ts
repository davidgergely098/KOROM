import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryFromCartComponent } from './delivery-from-cart.component';

describe('DeliveryFromCartComponent', () => {
  let component: DeliveryFromCartComponent;
  let fixture: ComponentFixture<DeliveryFromCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryFromCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryFromCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
