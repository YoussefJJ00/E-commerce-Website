import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistocmdComponent } from './histocmd.component';

describe('HistocmdComponent', () => {
  let component: HistocmdComponent;
  let fixture: ComponentFixture<HistocmdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistocmdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistocmdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
