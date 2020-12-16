import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteLineComponent } from './teste-line.component';

describe('TesteLineComponent', () => {
  let component: TesteLineComponent;
  let fixture: ComponentFixture<TesteLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesteLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
