import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'practice';
  myarray = [5, 6, 7, 5, 6, 8];
  ngOnInit(): void {
    this.reduce();
  }
  reduce() {
    let Myarray: number[] = [];
    this.myarray.map(function (item) {
      var exItem = Myarray.find(x => x == item)
      if (exItem) {
        console.log("Already Exist", exItem);
      }
      else {
        Myarray.push(item);
      }
    })
    console.log(Myarray);
  }
}
