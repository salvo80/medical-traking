import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { TerapiaPage } from '../terapia/terapia';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  prodotto:string
  prezzo:number
  //lista:Array<string>

  constructor(private storage: Storage, public navCtrl: NavController) {
    navCtrl.push(TerapiaPage)
    //this.lista = []
  }

  add():void {
    this.storage.set(this.prodotto, this.prezzo)
    //this.lista.unshift(this.prodotto + '-' + this.prezzo)
    this.prodotto = ''
    this.prezzo = 0
  }

  getList(): Array<string>{
    return []//this.lista
  }

  getProduct(s:string): string {
    return s.split('-')[0];
  }

  getPrice(s:string): number {
    return Number.parseFloat(s.split('-')[1]);
  }

  getTotal():number{
    
      return 0
    
  }
}
