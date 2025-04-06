import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtGirasolesComponent } from './art-girasoles.component';

describe('ArtGirasolesComponent', () => {
  let component: ArtGirasolesComponent;
  let fixture: ComponentFixture<ArtGirasolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtGirasolesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtGirasolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
