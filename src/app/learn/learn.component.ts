import { CommonService } from './../Services/common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.scss']
})
export class LearnComponent implements OnInit {

  public counter = 0;

  public counterBinhPhuong = 0;
  constructor(private common: CommonService){}

  public districts:string [] = [];

  public vietnamData = [{
    city: 'Chọn tỉnh thành',
    dictrict: ['Chọn tỉnh thành']
  },{
    city: 'HCM',
    dictrict: ["GV","Q1","Q2"]
  },{
    city: 'Long An',
    dictrict:["TP Tân An","Thủ Thừa","Bến Lức"]
  }]

  ngOnInit(): void {
    this.counter = this.common.counter;
    this.counterBinhPhuong = this.common.binhPhuong(this.counter);
    this.common.counter++;

    console.log('vietnamData =',this.vietnamData);
  }

  public changeCity(event: any):void {
    const city = event.target.value;
    console.log(city);
    if(!city)
    {
      return;
    }

    this.districts = this.vietnamData.find(data => data.city === city)?.dictrict || [];
  }
}
