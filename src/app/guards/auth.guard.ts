import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlTree, } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot
    ): boolean | UrlTree | Observable<boolean | UrlTree> 
    | Promise<boolean | UrlTree> {

    return this.verificarAcesso();
  }

    private verificarAcesso(){
          
    if (this.authService.usuarioEstaAutenticado()){
      return true;
    }

    this.router.navigate(['/login']);
    
    return false;

    }

    canLoad(route: Route):Observable<boolean>|Promise<boolean>|boolean {
      console.log('canLoad: Verificando se usuario pode carregar o cod do módulo')
      return this.verificarAcesso();
    }


}
