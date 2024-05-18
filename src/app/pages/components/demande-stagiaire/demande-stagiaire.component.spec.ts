import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeStagiaireComponent } from './demande-stagiaire.component';

describe('DemandeStagiaireComponent', () => {
  let component: DemandeStagiaireComponent;
  let fixture: ComponentFixture<DemandeStagiaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemandeStagiaireComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemandeStagiaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
