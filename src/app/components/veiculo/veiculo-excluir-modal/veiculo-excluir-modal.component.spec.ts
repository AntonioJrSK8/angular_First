import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculoExcluirModalComponent } from './veiculo-excluir-modal.component';

describe('VeiculoExcluirModalComponent', () => {
  let component: VeiculoExcluirModalComponent;
  let fixture: ComponentFixture<VeiculoExcluirModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeiculoExcluirModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiculoExcluirModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
