import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtSombrillaComponent } from './art-sombrilla.component';

describe('ArtSombrillaComponent', () => {
  let component: ArtSombrillaComponent;
  let fixture: ComponentFixture<ArtSombrillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtSombrillaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtSombrillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
