import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  campus: any;
  mostrarRecursos: { mostrar: boolean, icon: string };

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    console.log(navParams);
    // If we navigated to this page, we will have an item available as a nav param
    // this.selectedItem = navParams.get('nome');
    this.selectedItem = navParams.data;

    this.http.get('http://grupo6.centralus.cloudapp.azure.com:8181/lista_campus.json')
        .map(res => res.json()).subscribe(data => {
        for(var i = 0; i < data.length; i++) {
          if(this.selectedItem.nome == data[i].nome) {
            this.campus = data[i];
            console.log(this.campus);
          }
        }
    });

    this.mostrarRecursos = { mostrar: false, icon: "ios-add-circle-outline"};
    /*this.mostrarRecursos.mostrar = false;
    this.mostrarRecursos.icon = "ios-add-circle-outline";*/

    /* // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    } */
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }

  toggleRecursos() {
    if(this.mostrarRecursos.mostrar) {
      this.mostrarRecursos.mostrar = false;
      this.mostrarRecursos.icon = "ios-add-circle-outline"
    } else {
      this.mostrarRecursos.mostrar = true;
      this.mostrarRecursos.icon = "ios-remove-circle-outline"
    }
  }
}
