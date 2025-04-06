import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtBesoComponent } from './art-beso.component';

describe('ArtBesoComponent', () => {
  let component: ArtBesoComponent;
  let fixture: ComponentFixture<ArtBesoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtBesoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtBesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
