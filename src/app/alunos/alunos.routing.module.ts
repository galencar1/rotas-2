import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AlunoDetalheComponent } from "./aluno-detalhe/aluno-detalhe.component";
import { AlunoFormComponent } from "./aluno-form/aluno-form.component";


import { AlunosComponent } from "./alunos.component";
/*
const alunosRoutes = [
    {path: 'alunos', component: AlunosComponent},
    {path: 'alunos/novo', component: AlunoFormComponent},
    {path: 'alunos/:id', component: AlunoDetalheComponent},
    {path: 'alunos/:id/editar', component: AlunoFormComponent},
    
];*/

//Utilizando rotas filhas
// inserir router outlet no component
const alunosRoutes = [
    {path: 'alunos', component: AlunosComponent, children : [
        {path: 'novo', component: AlunoFormComponent},
        {path: ':id', component: AlunoDetalheComponent},
        {path: ':id/editar', component: AlunoFormComponent},
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(alunosRoutes)],
    exports: [RouterModule],
})
export class AlunosRoutingModule {}