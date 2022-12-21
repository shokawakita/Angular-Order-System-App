import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchItemFormComponent } from './search-item-form.component';

describe('SearchItemFormComponent', () => {
  let component: SearchItemFormComponent;
  let fixture: ComponentFixture<SearchItemFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchItemFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
