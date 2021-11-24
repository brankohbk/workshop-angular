import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { PendientesModule } from './pendientes/pendientes.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    PendientesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
