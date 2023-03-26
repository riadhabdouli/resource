import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyEquipmentComponent } from './modify-equipment.component';

describe('ModifyEquipmentComponent', () => {
  let component: ModifyEquipmentComponent;
  let fixture: ComponentFixture<ModifyEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyEquipmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
