import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEquipmentComponent } from './create-equipment/create-equipment.component';
import { DeleteEquipmentComponent } from './delete-equipment/delete-equipment.component';
import { ListEquipmentComponent } from './list-equipment/list-equipment.component';
import { ModifyEquipmentComponent } from './modify-equipment/modify-equipment.component';

const routes: Routes = [
  { path: '',component:ListEquipmentComponent},
  { path: 'create-equipment',component:CreateEquipmentComponent},
  { path: 'delete-equipment',component:DeleteEquipmentComponent},
  { path: 'modify-equipment',component:ModifyEquipmentComponent}


  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipmentRoutingModule { }
