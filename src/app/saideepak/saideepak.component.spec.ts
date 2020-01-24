import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaideepakComponent } from './saideepak.component';

describe('Component: SaideepakComponent', () => {
  let component: SaideepakComponent;
  let fixture: ComponentFixture<SaideepakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaideepakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaideepakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
