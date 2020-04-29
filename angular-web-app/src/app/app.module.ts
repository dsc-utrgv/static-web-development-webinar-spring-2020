import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import{HttpClientModule} from '@angular/common/http';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router' 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: AppComponent }
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    // NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
