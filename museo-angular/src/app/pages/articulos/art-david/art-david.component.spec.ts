import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtDavidComponent } from './art-david.component';

describe('ArtDavidComponent', () => {
  let component: ArtDavidComponent;
  let fixture: ComponentFixture<ArtDavidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtDavidComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtDavidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
