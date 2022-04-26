import { NgModule } from '@angular/core';
//import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AlunosGuard } from './guards/alunos.guard';
import { AuthGuard } from './guards/auth.guard';
import { CursosGuard } from './guards/cursos.guard';
//import { RouterModule, Routes } from '@angular/router';

//const routes: Routes = [];


//import { CursoDetalheComponent } from "./cursos/curso-detalhe/curso-detalhe.component";
//import { CursoNaoEncontradoComponent } from "./cursos/curso-nao-encontrado/curso-nao-encontrado.component";
//import { CursosComponent } from "./cursos/cursos.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";

const appRoutes: Routes = [
    { path: 'cursos',loadChildren: () => import ('src/app/cursos/cursos.module')
    .then(c => c.CursosModule),
    canActivate: [AuthGuard],
    canActivateChild: [CursosGuard]
  },
    
    
    {path: 'alunos', loadChildren: () => import('src/app/alunos/alunos.module')
    .then(a => a.AlunosModule),
    canActivate: [AuthGuard]//,
    //canActivateChild: [AlunosGuard],
  },
    
    
    //{path: 'cursos', component: CursosComponent},
    //{path: 'curso/:id', component: CursoDetalheComponent},
    
    
    {path: 'login', component: LoginComponent},
    
    //{path: 'naoEncontrado', component: CursoNaoEncontradoComponent},
    
    
    {path: '', component: HomeComponent, canActivate: [AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
