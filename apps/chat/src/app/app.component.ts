import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'konnect-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'chat';
  ngOnInit(): void {
  }
}
