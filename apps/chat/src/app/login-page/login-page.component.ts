import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LoginTicketGenService } from '../login-ticket-gen.service';
@Component({
  selector: 'konnect-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  phoneNumber: any
  @ViewChild('loginButton') loginButton: ElementRef | undefined;
  @ViewChild('closeModalButton') closeModalButton: ElementRef | undefined;
  constructor(private _ticketGenerator: LoginTicketGenService, private _router: Router) { }
  ngOnInit(): void {
    let phoneNumber = ''
    this._ticketGenerator.phoneNumber.subscribe(phn => phoneNumber = phn)
    if (this.isLoggedIn()) this.login(phoneNumber)
    else {
      debugger
      this.loginButton?.nativeElement.click()
    }
  }
  isLoggedIn() {
    let phoneNumber = ''
    this._ticketGenerator.phoneNumber.subscribe(phn => phoneNumber = phn)
    if (phoneNumber != '' || undefined) return true
    else return false
  }
  login(phoneNumber: any) {
    if (phoneNumber != null || '') {
      this._ticketGenerator.phoneNumber.next(phoneNumber)
      this.closeModal()
      this._router.navigate(['chat-home'])
    }
  }
  closeModal() {
    this.closeModalButton?.nativeElement.click()
  }

}
