import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projet1';
  loveIts = 0;

  post = [ {
    title: 'title1',
    content: 'content1',
  },
  {
    title: 'title2',
    content: 'content2',
  },
 {
    title: 'title3',
    content: 'content3',
 }];

 }


