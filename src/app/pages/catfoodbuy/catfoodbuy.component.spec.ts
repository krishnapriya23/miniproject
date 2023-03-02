import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatfoodbuyComponent } from './catfoodbuy.component';

describe('CatfoodbuyComponent', () => {
  let component: CatfoodbuyComponent;
  let fixture: ComponentFixture<CatfoodbuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatfoodbuyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatfoodbuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
