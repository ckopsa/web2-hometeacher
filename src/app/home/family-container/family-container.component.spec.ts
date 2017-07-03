import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyContainerComponent } from './family-container.component';

describe('FamilyContainerComponent', () => {
  let component: FamilyContainerComponent;
  let fixture: ComponentFixture<FamilyContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilyContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
