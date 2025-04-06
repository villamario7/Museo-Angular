import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtAlmuerzoComponent } from './art-almuerzo.component';

describe('ArtAlmuerzoComponent', () => {
  let component: ArtAlmuerzoComponent;
  let fixture: ComponentFixture<ArtAlmuerzoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtAlmuerzoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtAlmuerzoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
