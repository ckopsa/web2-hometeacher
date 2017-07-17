import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanionshipContainerComponent } from './companionship-container.component';

describe('CompanionshipContainerComponent', () => {
  let component: CompanionshipContainerComponent;
  let fixture: ComponentFixture<CompanionshipContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanionshipContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanionshipContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
