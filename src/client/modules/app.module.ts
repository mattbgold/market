import {ALL_PROVIDERS} from '../services';
import {CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppComponent, HeaderComponent, FooterComponent, GameComponent, MachineComponent, OrderComponent } from '../components/';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    CommonModule,
    FormsModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    GameComponent,
    MachineComponent,
    OrderComponent,
    AppComponent
  ],
  providers: [
      ...ALL_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
