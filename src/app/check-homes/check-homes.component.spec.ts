import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckHomesComponent } from './check-homes.component';

describe('CheckHomesComponent', () => {
  let component: CheckHomesComponent;
  let fixture: ComponentFixture<CheckHomesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckHomesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckHomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
