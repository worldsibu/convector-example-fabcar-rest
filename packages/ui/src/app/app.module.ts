import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { FabcarController } from 'fabcar-cc';
import {
  ConvectorRestApiAngularAdapterModule
} from '@worldsibu/convector-rest-api-angular-adapter';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    ConvectorRestApiAngularAdapterModule.forRoot({
      url: 'http://localhost:8000',
      routes: [
        {
          "function": "init",
          "verb": "post",
          "controller": "fabcar"
        },
        {
          "function":"get",
          "verb":"get",
          "controller": "fabcar"
        },
        {
          "function":"getAll",
          "verb":"get",
          "controller": "fabcar"
        },
        {
          "function":"create",
          "verb":"post",
          "controller": "fabcar",
          "params": ["car"]
        },
        {
          "function":"changeOwner",
          "verb":"post",
          "controller": "fabcar",
          "params": ["id","owner"]
        }
      ]
    }),
    ConvectorRestApiAngularAdapterModule.perController(FabcarController)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
