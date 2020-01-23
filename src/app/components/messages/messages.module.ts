import { NgModule } from '@angular/core';
import { MessagesComponent } from './messages.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessagesRouting } from './messages-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    MessagesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MessagesRouting,
    HttpClientModule,
  ]
})
export class MessagesModule { }
