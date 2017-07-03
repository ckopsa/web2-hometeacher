import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanionContainerComponent } from './companion-container.component';

describe('CompanionContainerComponent', () => {
  let component: CompanionContainerComponent;
  let fixture: ComponentFixture<CompanionContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanionContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanionContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
