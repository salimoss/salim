import { Component, Input , OnInit } from '@angular/core';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {


  @Input() title: string;
  @Input() content: string;
  loveIts = 0;

  lastUpdate = new Promise( ((resolve, reject) => {
      const date = new Date();
      setTimeout(
        () => {
          resolve(date);
        }, 2000
      );
    } )
  ) ;
  onAllumer() {
    this.loveIts++;
    console.log(this.loveIts );
  }

  onAllumer1() {
    this.loveIts--;
    console.log(this.loveIts );
  }
  constructor() {

  }

  ngOnInit() {
  }

  getColor() {
    if (this.loveIts > 0) {
      return 'green';
    }
    if (this.loveIts < 0 ) {
      return 'red';
    }
  }
}
