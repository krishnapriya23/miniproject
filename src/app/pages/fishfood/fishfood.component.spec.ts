import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FishfoodComponent } from './fishfood.component';

describe('FishfoodComponent', () => {
  let component: FishfoodComponent;
  let fixture: ComponentFixture<FishfoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FishfoodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FishfoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
