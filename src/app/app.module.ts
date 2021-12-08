import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormCompComponent } from './components/form-comp/form-comp.component';
import { FormComp2Component } from './components/form-comp2/form-comp2.component';

@NgModule({
  declarations: [
    AppComponent,
    FormCompComponent,
    FormComp2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
