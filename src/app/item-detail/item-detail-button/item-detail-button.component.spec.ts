import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDetailButtonComponent } from './item-detail-button.component';

describe('ItemDetailButtonComponent', () => {
  let component: ItemDetailButtonComponent;
  let fixture: ComponentFixture<ItemDetailButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemDetailButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemDetailButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
