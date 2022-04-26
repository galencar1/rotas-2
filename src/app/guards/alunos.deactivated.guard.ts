import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";


import { AlunoFormComponent } from "../alunos/aluno-form/aluno-form.component";
import { IFormCanDeactivate } from "./IFormCanDeactivate";

@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<IFormCanDeactivate> {
        
        //constructor(private permissions: Permissions, private currentUser: UserToken) {}
        
        canDeactivate(
            component: IFormCanDeactivate,
            route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot
        ): Observable<boolean>|Promise<boolean>|boolean {
            console.log('Guarda de Desativação');
            //return component.podeMudarRota();
            return component.podeDesativar();
    }
}



