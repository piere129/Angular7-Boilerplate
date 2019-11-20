import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './components/heroes/heroes.component'
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MessagesComponent } from './components/messages/messages.component';
import { AuthGuard } from './guards/auth.guard';
import { InputOutputComponent } from './components/input-output/input-output.component';
const routes: Routes = [
  { path: 'heroes', component: HeroesComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'detail/:id', component: HeroDetailComponent, canActivate: [AuthGuard] },
  { path: 'messages', component: MessagesComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'input', component: InputOutputComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
