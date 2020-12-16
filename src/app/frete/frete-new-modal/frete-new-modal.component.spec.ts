import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreteNewModalComponent } from './frete-new-modal.component';

describe('FreteNewModalComponent', () => {
  let component: FreteNewModalComponent;
  let fixture: ComponentFixture<FreteNewModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreteNewModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreteNewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
