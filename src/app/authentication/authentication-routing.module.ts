import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LangPopoverComponent } from './lang-popover/lang-popover.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  // { path: 'intro', component: IntroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'langPopover', component: LangPopoverComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationPageRoutingModule {}
