import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipmentRoutingModule } from './equipment-routing.module';
import { CreateEquipmentComponent } from './create-equipment/create-equipment.component';
import { ListEquipmentComponent } from './list-equipment/list-equipment.component';
import { DeleteEquipmentComponent } from './delete-equipment/delete-equipment.component';
import { ModifyEquipmentComponent } from './modify-equipment/modify-equipment.component';


@NgModule({
  declarations: [
    CreateEquipmentComponent,
    ListEquipmentComponent,
    DeleteEquipmentComponent,
    ModifyEquipmentComponent
  ],
  imports: [
    CommonModule,
    EquipmentRoutingModule
  ]
})
export class EquipmentModule { }
