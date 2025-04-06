import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { PagoComponent } from './pages/pago/pago.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component : HomeComponent},
    {path: 'navbar', component : NavbarComponent},
    {path: 'footer', component : FooterComponent},
    {path: 'catalogo', component : CatalogoComponent},
    {path: 'contacto', component : ContactoComponent},
    {path: 'about-us', component : AboutUsComponent},
    {path: 'login', component : LoginComponent},
    {path: 'register', component : RegisterComponent},
    {path: 'pago', component : PagoComponent},
];
