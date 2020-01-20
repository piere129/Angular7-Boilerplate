import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './components/heroes/heroes.component'
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { InputOutputComponent } from './components/input-output/input-output.component';
import { FormsComponent } from './components/forms/forms.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'detail/:id', component: HeroDetailComponent, canActivate: [AuthGuard] },
  { path: 'messages',    loadChildren: './components/messages/messages.module#MessagesModule',
  canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'input', component: InputOutputComponent },
  { path: 'forms', component: FormsComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
