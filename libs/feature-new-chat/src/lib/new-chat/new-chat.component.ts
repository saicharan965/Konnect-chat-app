import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'konnect-new-chat',
  templateUrl: './new-chat.component.html',
  styleUrls: ['./new-chat.component.scss']
})
export class NewChatComponent implements AfterViewInit {
  recipentPhoneNumber:any
  @ViewChild('newChatButton') newChatButton: ElementRef | undefined;
  constructor() { }

  ngAfterViewInit(): void {
    this.newChatButton?.nativeElement.click()   
  }

  startChat(recipentPhoneNumber:any){
    
  }
}
