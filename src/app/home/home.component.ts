import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  constructor() {}

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
    haGia: true
  },{
    ten: 'Banana',
    gia: 23000,
    giaKhuyenMai: 23000,
    haGia: false
  }];

  public districts:string[] = [];

  public VietNamCity = [
    {
      city: 'Chọn thành phố', 
      district: [] 
    },
    {
      city: 'Long An', 
      district: ["Long An","TP Tân An","Bến Lức","Tân Trụ","Thủ Thừa"] 
    },
    {
      city: 'Hồ Chí Minh', 
      district: [
        'Gò vấp',
        'Q1',
        'Q2',
        'Q3',
        'Q4']
    }
  ];

  public resetName() :void{
    this.name = '';
  }

  
  ngOnInit(): void {
    console.log('cities = ',this.VietNamCity);
    
  }

  public changeCity(event :any){
    const chosenCity = event.target.value;
    if(!chosenCity)
      return;

    //cach 1
    // const search = this.VietNamCity.filter((city) => city.city === chosenCity);
    // if(search && search.length > 0)
    //   this.districts = search[0].district;
    

    //cach 2
    this.districts = this.VietNamCity.find(data => data.city === chosenCity)?.district || [];
  }


}
