import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { ObraDetalleComponent } from './pages/obra-detalle/obra-detalle.component';
import { PagoComponent } from './pages/pago/pago.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'obra/:id', component: ObraDetalleComponent },
  { path: 'pago', component: PagoComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: '**', redirectTo: '' }
];
