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
import { HttpClientModule } from '@angular/common/http'; //para arreglar el rollo datajson de catalogo.component

//imports articulos
import { ArtAlmuerzoComponent } from './pages/articulos/art-almuerzo/art-almuerzo.component';
import { ArtBesoComponent } from './pages/articulos/art-beso/art-beso.component';
import { ArtDavidComponent } from './pages/articulos/art-david/art-david.component';
import { ArtGirasolesComponent } from './pages/articulos/art-girasoles/art-girasoles.component';
import { ArtMadonnaComponent } from './pages/articulos/art-madonna/art-madonna.component';
import { ArtSombrillaComponent } from './pages/articulos/art-sombrilla/art-sombrilla.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component : HomeComponent},
    
    //Rutas estáticas 
    {path: 'navbar', component : NavbarComponent},
    {path: 'footer', component : FooterComponent},

    //Rutas navbar
    {path: 'catalogo', component : CatalogoComponent},
    {path: 'contacto', component : ContactoComponent},
    {path: 'about-us', component : AboutUsComponent},
    {path: 'login', component : LoginComponent},
    {path: 'register', component : RegisterComponent},
    {path: 'pago', component : PagoComponent},

    //rutas articulos
    {path: 'almuerzo', component : ArtAlmuerzoComponent},
    {path: 'beso', component : ArtBesoComponent},
    {path: 'david', component : ArtDavidComponent},
    {path: 'girasoles', component : ArtGirasolesComponent},
    {path: 'madonna', component : ArtMadonnaComponent},
    {path: 'sombrilla', component : ArtSombrillaComponent},
];
