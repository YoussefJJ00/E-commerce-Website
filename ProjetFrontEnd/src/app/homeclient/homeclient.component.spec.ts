import { ComponentFixture, TestBed } from '@angular/core/testing';

import { homeclientComponent } from './homeclient.component';

describe('homeclientComponent', () => {
  let component: homeclientComponent;
  let fixture: ComponentFixture<homeclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ homeclientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(homeclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
