import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreteEditModalComponent } from './frete-edit-modal.component';

describe('FreteEditModalComponent', () => {
  let component: FreteEditModalComponent;
  let fixture: ComponentFixture<FreteEditModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreteEditModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreteEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
