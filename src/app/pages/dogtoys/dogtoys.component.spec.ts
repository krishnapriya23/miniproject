import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogtoysComponent } from './dogtoys.component';

describe('DogtoysComponent', () => {
  let component: DogtoysComponent;
  let fixture: ComponentFixture<DogtoysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogtoysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogtoysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
