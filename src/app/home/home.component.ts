import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public name ='Duong Thanh An';
  public age = 15;

  public traiCay = ['apple','banana','orange','purple', 'grape'];
  public traiCay2 = [{
    ten: 'Apple',
    gia: 23500,
    giaKhuyenMai: 20000,
    haGia: true
  },{
    ten: 'Coconut',
    gia: 12900,
    giaKhuyenMai: 10900,
    haGia: false
  },{
    ten: 'Banana',
    gia: 23,
    giaKhuyenMai: 20
  }];

  constructor() {}
  ngOnInit(): void {
    console.log(`traiCay = `,this.traiCay);
  }

  public resetName() :void{
    this.name = '';
  }
}
