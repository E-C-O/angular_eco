import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstaticoComponent } from './estatico.component';

describe('EstaticoComponent', () => {
  let component: EstaticoComponent;
  let fixture: ComponentFixture<EstaticoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstaticoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstaticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
