import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogfoodsComponent } from './dogfoods.component';

describe('DogfoodsComponent', () => {
  let component: DogfoodsComponent;
  let fixture: ComponentFixture<DogfoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogfoodsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogfoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
