import { LoginGuard } from './login.guard';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NewChatComponent } from '@konnect/feature-new-chat'
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormsModule } from '@angular/forms';
import { ChatSidenavComponent } from './chat-sidenav/chat-sidenav.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';

const ROUTES: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  {
    path: 'chat-home',
    component: ChatSidenavComponent,
    canActivate: [LoginGuard],
    children: [
      { path: 'new-chat', component: NewChatComponent },
      { path: 'view-profile', component: ViewProfileComponent }

    ]
  },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
]

@NgModule({
  declarations: [AppComponent, LoginPageComponent, ChatSidenavComponent, ViewProfileComponent,],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
