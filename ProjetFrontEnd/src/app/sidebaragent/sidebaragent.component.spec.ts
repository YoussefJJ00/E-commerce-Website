import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebaragentComponent } from './sidebaragent.component';

describe('SidebaragentComponent', () => {
  let component: SidebaragentComponent;
  let fixture: ComponentFixture<SidebaragentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebaragentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebaragentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
