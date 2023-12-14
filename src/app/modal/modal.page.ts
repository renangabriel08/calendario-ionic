import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-your-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  eventos: any[] = [];
  dataRecebida: any;
  tituloEvento!: string;

  constructor(private modalController: ModalController, private route: ActivatedRoute, private navParams: NavParams) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.dataRecebida = params;
      console.log(params);
    });
  }

  ionViewWillEnter() {
    this.dataRecebida = this.navParams.get('data');
    console.log('Data recebida:', this.dataRecebida);
  }

  fecharModal() {
    this.modalController.dismiss();
  }

  confirmar() {
    const newEvent = {
      title: this.tituloEvento,
      date: this.dataRecebida,
    };

    this.eventos.push(newEvent);
    this.tituloEvento = '';
    this.dataRecebida = ''

    this.modalController.dismiss(this.eventos);
  }

}
