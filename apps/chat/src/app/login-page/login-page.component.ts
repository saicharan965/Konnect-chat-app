import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginTicketGenService } from '../login-ticket-gen.service';
@Component({
  selector: 'konnect-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit, AfterViewInit {
  phoneNumber: any
  @ViewChild('loginButton') loginButton: ElementRef | undefined;
  @ViewChild('closeModalButton') closeModalButton: ElementRef | undefined;
  constructor(private _ticketGenerator: LoginTicketGenService, private _router: Router) { }
  ngAfterViewInit(): void {
    if (!this.isLoggedIn()) this.loginButton?.nativeElement.click()
  }
  ngOnInit(): void {
    let phoneNumber = ''
    this._ticketGenerator.phoneNumber.subscribe(phn => phoneNumber = phn)
    if (this.isLoggedIn()) this.login(phoneNumber)
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
    debugger
    this.closeModalButton?.nativeElement.click()
  }

}
