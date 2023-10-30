import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriterDetailsComponent } from './writer-details.component';

describe('WriterDetailsComponent', () => {
  let component: WriterDetailsComponent;
  let fixture: ComponentFixture<WriterDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WriterDetailsComponent]
    });
    fixture = TestBed.createComponent(WriterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
