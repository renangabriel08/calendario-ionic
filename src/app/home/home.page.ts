import { ChangeDetectorRef, Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private modalController: ModalController, private changeDetectorRef: ChangeDetectorRef) {}

  dataSelecionada!: string;
  detalhesEvento: any[] = [];

  alterarData() {
    this.dataSelecionada = this.dataSelecionada.substring(0, 10);
    console.log('Data selecionada:', this.dataSelecionada);
  }


  async abrirModal() {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: {
        data: this.dataSelecionada
      },
    });

    modal.onDidDismiss().then((data) => {
      if (data && data.data) {
        this.detalhesEvento.push(data.data);
        console.log('aqui',    this.detalhesEvento);
        this.changeDetectorRef.detectChanges(); 
      }
    });

    await modal.present();
  }
}
