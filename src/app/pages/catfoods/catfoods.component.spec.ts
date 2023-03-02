import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatfoodsComponent } from './catfoods.component';

describe('CatfoodsComponent', () => {
  let component: CatfoodsComponent;
  let fixture: ComponentFixture<CatfoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatfoodsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatfoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
