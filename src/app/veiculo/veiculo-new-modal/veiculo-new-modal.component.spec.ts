import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculoNewModalComponent } from './veiculo-new-modal.component';

describe('VeiculoNewModalComponent', () => {
  let component: VeiculoNewModalComponent;
  let fixture: ComponentFixture<VeiculoNewModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeiculoNewModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiculoNewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
