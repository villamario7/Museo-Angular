import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component : HomeComponent},
    {path: 'navbar', component : NavbarComponent},
    {path: 'footer', component : FooterComponent},
    {path: 'catalogo', component : CatalogoComponent},
    {path: 'about-us', component : AboutUsComponent},
    {path: 'home', component : HomeComponent},
];
