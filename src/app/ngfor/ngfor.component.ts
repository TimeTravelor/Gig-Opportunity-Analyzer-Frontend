import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit{
  products = [
    {proimg: 'Laptop.png', proid: 'EE-001', proname: 'Laptop', proprice: 120000},
    {proimg: '', proid: 'EE-002', proname: 'Television', proprice: 90000},
    {proimg: '', proid: 'EE-003', proname: 'Mobile', proprice: 200000}
  ]

  constructor(private router: Router){}

  ngOnInit(): void {
    
  }
  users:{name:string}[] = [];
  onCreateUser(uname : any){
    this.users.push({name : uname});
    if(this.users.length > 3){
      //alert("Maximum capacity!");
      this.router.navigate(['products']);
    }
  }
  

  onRemoveUser(){
    this.users.splice(this.users.length - 1)
  }

  onRemoveItem(i : any){
    this.users.splice(i,1)
  }
}
