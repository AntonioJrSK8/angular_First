import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreteListComponent } from './frete-list.component';

describe('FreteListComponent', () => {
  let component: FreteListComponent;
  let fixture: ComponentFixture<FreteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreteListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
