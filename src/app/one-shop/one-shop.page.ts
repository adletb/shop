import { Component, OnInit } from '@angular/core';
import { Animation, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-one-shop',
  templateUrl: './one-shop.page.html',
  styleUrls: ['./one-shop.page.scss'],
})
export class OneShopPage implements OnInit {

  icon = '../../assets/icon/search.svg'
  mark = 'add'
  isDisabled = false;

  favImg = '../../assets/icon/favourite.svg'
  favImgChacked = '../../assets/icon/favourite-red.svg'
  Arr =        [ {checked: false, icon: this.favImg }, 
                  { checked: false, icon: this.favImg}, 
                  {checked: false, icon: this.favImg},
                  { checked: false, icon: this.favImg}, 
                  {checked: false, icon: this.favImg},
                  { checked: false, icon: this.favImg}, 
                  {checked: false, icon: this.favImg},
                  {checked: false, icon: this.favImg}
                ]

  constructor(private animationCtrl: AnimationController) {
    
  }

  ngOnInit() {
  }

  category = {
    slidesPerView: 4.5
  }

  async play(){
    
    const animationA: Animation = this.animationCtrl.create()
      .addElement(document.querySelector('.plus'))
      .duration(250)
      .fromTo('transform', 'translateX(0px)', 'translateX(-160px)')  

    const animationB: Animation = this.animationCtrl.create()
      .addElement(document.querySelector('.badge'))
      .duration(250)
      .fromTo('transform', 'translate(0,0)', 'translate(15px, -15px)')
      .fromTo('opacity', '0', '1');

     await animationA.play();
     
     this.icon = '../../assets/icon/cart.svg';
     this.mark = 'checkmark-outline';
     this.isDisabled = true;
     
     await animationB.play();     
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