import { AfterContentInit, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LoginTicketGenService } from '../login-ticket-gen.service';
@Component({
  selector: 'konnect-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit, AfterViewInit {
  phoneNumber: any
  @ViewChild('closeModalButton') closeModalButton: ElementRef | undefined;
  @ViewChild('loginButton') loginButton: ElementRef | undefined;
  constructor(private _ticketGenerator: LoginTicketGenService, private _router: Router) { }


  ngOnInit(): void {
    let phoneNumber = ''
    this._ticketGenerator.phoneNumber.subscribe(phn => phoneNumber = phn)
    if (this.isLoggedIn()) this.login(phoneNumber)
  }
  ngAfterViewInit(): void {
    this.loginButton?.nativeElement.click()
  }

  isLoggedIn() {
    let phoneNumber = ''
    this._ticketGenerator.phoneNumber.subscribe(phn => phoneNumber = phn)
    if (phoneNumber != '') return true
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
