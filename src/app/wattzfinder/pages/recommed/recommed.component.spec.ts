import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommedComponent } from './recommed.component';

describe('RecommedComponent', () => {
  let component: RecommedComponent;
  let fixture: ComponentFixture<RecommedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecommedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecommedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
