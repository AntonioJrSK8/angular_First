import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreteExcluirModalComponent } from './frete-excluir-modal.component';

describe('FreteExcluirModalComponent', () => {
  let component: FreteExcluirModalComponent;
  let fixture: ComponentFixture<FreteExcluirModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreteExcluirModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreteExcluirModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
