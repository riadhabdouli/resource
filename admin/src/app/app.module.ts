import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EquipmentRoutingModule } from './ressources/equipment/equipment-routing.module';
import { EquipmentModule } from './ressources/equipment/equipment.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EquipmentRoutingModule,
    EquipmentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
