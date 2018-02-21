import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//for service
import { DataService } from './data.service';

//for animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms'; //for two way data binding
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AbountComponent } from './abount/abount.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AbountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
