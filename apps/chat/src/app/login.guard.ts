import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of, Subscription } from 'rxjs';
import { LoginTicketGenService } from './login-ticket-gen.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  $phoneNumber: Subscription | undefined
  phn: any
  constructor(private _ticketGenerator: LoginTicketGenService) { }
  canActivate(): Observable<boolean> {
    this.$phoneNumber = this._ticketGenerator.phoneNumber.subscribe(phn => {
      this.phn = phn
    })
    // return of(this._ticketGenerator.IsAuthorized(this.phn))
    return of(true)
  }

}
