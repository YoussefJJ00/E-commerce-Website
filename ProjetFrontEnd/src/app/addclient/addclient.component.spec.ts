import { ComponentFixture, TestBed } from '@angular/core/testing';

import { addclientComponent } from './addclient.component';

describe('addclientComponent', () => {
  let component: addclientComponent;
  let fixture: ComponentFixture<addclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ addclientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(addclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
