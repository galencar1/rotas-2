import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AlunosDeactivateGuard } from "../guards/alunos.deactivated.guard";
import { AlunosGuard } from "../guards/alunos.guard";
import { AlunoDetalheComponent } from "./aluno-detalhe/aluno-detalhe.component";
import { AlunoFormComponent } from "./aluno-form/aluno-form.component";


import { AlunosComponent } from "./alunos.component";
import { AlunoDetalheResolver } from "./guards/aluno-detalhe.resolve";
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
    {path: '', component: AlunosComponent,
    canActivateChild: [AlunosGuard  ],
    children : [
        {path: 'novo', component: AlunoFormComponent},
        {path: ':id', component: AlunoDetalheComponent,
            resolve: { aluno: AlunoDetalheResolver }
        },
        {path: ':id/editar', component: AlunoFormComponent,
            canDeactivate: [AlunosDeactivateGuard]
        },
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(alunosRoutes)],
    exports: [RouterModule],
})
export class AlunosRoutingModule {}