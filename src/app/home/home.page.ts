import { Component } from '@angular/core';
import { Animation, AnimationController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  favImg = '../../assets/icon/favourite.svg'
  favImgChacked = '../../assets/icon/favourite-red.svg'
  recomendArr = [ {checked: false, icon: this.favImg }, 
                  { checked: false, icon: this.favImg}, 
                  {checked: false, icon: this.favImg}]
  
  newArr =       [ {checked: false, icon: this.favImg }, 
                  { checked: false, icon: this.favImg}, 
                  {checked: false, icon: this.favImg}]
   
                 
constructor(private animationCtrl: AnimationController) {  }

ngOnInit() {
}
  
  categories = {
    slidesPerView: 4.5  
  }
  recommend = {
    slidesPerView: 2.5
  }
  promotions = {
    slidesPerView: 1.8
  }
  store = {
    slidesPerView: 2.5
  }

  select(arr){
    arr.checked = !arr.checked

    if (arr.checked === true){
      arr.icon = this.favImgChacked
    } else {
      arr.icon = this.favImg
    }      

  }

  show(){
      console.log('hi')
  }

  play(){
    const animationA: Animation = this.animationCtrl.create()
    .addElement(document.querySelector('.splash'))
    .duration(900)
    .fromTo('background', '#00D173', 'var(--background)');    
    
    setTimeout(() => {  animationA.play() }, 5000)
  }

}
