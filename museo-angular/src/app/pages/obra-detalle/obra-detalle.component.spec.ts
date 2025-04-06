import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObraDetalleComponent } from './obra-detalle.component';

describe('ObraDetalleComponent', () => {
  let component: ObraDetalleComponent;
  let fixture: ComponentFixture<ObraDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObraDetalleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObraDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
