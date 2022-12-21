import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMoveButtonComponent } from './page-move-button.component';

describe('PageMoveButtonComponent', () => {
  let component: PageMoveButtonComponent;
  let fixture: ComponentFixture<PageMoveButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageMoveButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageMoveButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
