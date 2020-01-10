import { NgModule } from '@angular/core';
import { MessagesComponent } from './messages.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessagesRouting } from './messages-routing.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MessagesRouting,
    HttpClientModule,
  ]
})
export class MessagesModule { }
