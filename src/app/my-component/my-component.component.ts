import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.scss']
})
export class MyComponentComponent implements OnInit {
  public serverId: number = 12
  public serverStatus: string = "offline"
  public serverName: string = "TestServer"
  public serverCreated: boolean = false
  public testVariable: any;
  public isDisable: boolean = false;
  public isShow: boolean = true;
  public myName: any;
  public colorVal: any;

  public fruits = [
    { 'fruitName': 'apple', 'cost': 25 },
    { 'fruitName': 'orange', 'cost': 22 },
    { 'fruitName': 'banana', 'cost': 30 },
    { 'fruitName': 'mango', 'cost': 50 },

  ]
  constructor() {

    this.serverStatus = "offline";
  }
  ngOnInit(): void {

  }


  onClick() {
    console.log("Clicked");
    this.serverStatus = "online";
    this.isDisable = true;
    this.colorVal = 'green'
  }

  public showBranch: any;

  selectBranch(event: any) {
    console.log(event.target.value)
    this.showBranch = event.target.value;
    this.isShow = false;
  }


}
