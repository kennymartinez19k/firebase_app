import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthenticationPageRoutingModule } from './authentication-routing.module';

import { AuthenticationPage } from './authentication.page';
import { LoginComponent } from './login/login.component';
import { CodeInputModule } from 'angular-code-input';
import { LangPopoverComponent } from './lang-popover/lang-popover.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AuthenticationPageRoutingModule,
    CodeInputModule.forRoot({
      codeLength: 6,
      isCharsCode: true,
      code: ''
    })
  ],
  declarations: [AuthenticationPage,
    LoginComponent,
    LangPopoverComponent,
  ]
})
export class AuthenticationPageModule {}
