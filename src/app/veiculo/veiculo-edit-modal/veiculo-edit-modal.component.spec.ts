import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculoEditModalComponent } from './veiculo-edit-modal.component';

describe('VeiculoEditModalComponent', () => {
  let component: VeiculoEditModalComponent;
  let fixture: ComponentFixture<VeiculoEditModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeiculoEditModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiculoEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
