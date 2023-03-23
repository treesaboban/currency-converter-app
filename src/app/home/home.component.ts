import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    currjson:any=[]
     base='INR'
     cont2='INR'
     result:string='1'
     changebase(a:string)
     {
      this.base=a
      console.log(this.base);
     }
     tocountry(b:string)
     {
      this.cont2=b
      console.log(this.cont2);
      
     }
  // country:any
  // rates={}
  // c:any
  constructor(private api:ApiService) {}
  convert()
  {
    // console.log(this.base);
    // console.log(this.cont2);
    this.api.getAllData(this.base).subscribe(data=>{
      // console.log(data);
      this.currjson=JSON.stringify(data)
      // console.log(this.currjson);
      this.currjson=JSON.parse(this.currjson)
      console.log(this.currjson);
      // this.result=this.currjson.rates.INR
      if(this.cont2=='USD')
      {
        this.result=this.currjson.rates.USD
      }
      if(this.cont2=='INR')
      {
        this.result=this.currjson.rates.INR
      }
      if(this.cont2=='EUR')
      {
        this.result=this.currjson.rates.EUR
      }
      if(this.cont2=='CAD')
      {
        this.result=this.currjson.rates.CAD
      }
    })
    
  }
  ngOnInit(): void {
    // this.getAllData()
  }
// getAllData()
// {
//   this.api.getAllData().subscribe((data)=>{
//     // console.log(data);
//     this.country=data
//     this.c=this.country.rates.INR;
//   })
// }
}
