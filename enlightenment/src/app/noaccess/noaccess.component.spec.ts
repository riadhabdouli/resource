import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoaccessComponent } from './noaccess.component';

describe('NoaccessComponent', () => {
  let component: NoaccessComponent;
  let fixture: ComponentFixture<NoaccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoaccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoaccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
