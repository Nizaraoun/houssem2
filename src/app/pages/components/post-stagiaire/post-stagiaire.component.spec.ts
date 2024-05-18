import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostStagiaireComponent } from './post-stagiaire.component';

describe('PostStagiaireComponent', () => {
  let component: PostStagiaireComponent;
  let fixture: ComponentFixture<PostStagiaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostStagiaireComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostStagiaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
