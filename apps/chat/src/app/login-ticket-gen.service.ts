import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginTicketGenService {
  
  phoneNumber = new BehaviorSubject('')
  constructor() { }
  IsAuthorized(phoneNumber: any) {
    if (phoneNumber != '') return true
    else return false
  }
}
