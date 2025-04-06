import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtMadonnaComponent } from './art-madonna.component';

describe('ArtMadonnaComponent', () => {
  let component: ArtMadonnaComponent;
  let fixture: ComponentFixture<ArtMadonnaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtMadonnaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtMadonnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
