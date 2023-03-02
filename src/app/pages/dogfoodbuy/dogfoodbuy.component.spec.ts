import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogfoodbuyComponent } from './dogfoodbuy.component';

describe('DogfoodbuyComponent', () => {
  let component: DogfoodbuyComponent;
  let fixture: ComponentFixture<DogfoodbuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogfoodbuyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogfoodbuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
