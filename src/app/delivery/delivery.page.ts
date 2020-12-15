import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.page.html',
  styleUrls: ['./delivery.page.scss'],
})
export class DeliveryPage implements OnInit {

  favImg = '../../assets/icon/favourite.svg'
  favImgChacked = '../../assets/icon/favourite-red.svg'
  Arr =        [ {checked: false, icon: this.favImg }, 
                  { checked: false, icon: this.favImg}, 
                  {checked: false, icon: this.favImg},
                  {checked: false, icon: this.favImg}
                ]
  constructor() { }

  ngOnInit() {
  }
  category = {
    slidesPerView: 4.5
  }

  select(arr){
    arr.checked = !arr.checked

    if (arr.checked === true){
      arr.icon = this.favImgChacked
    } else {
      arr.icon = this.favImg
    }      

  }

}
