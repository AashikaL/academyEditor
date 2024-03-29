import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-display',
  templateUrl: './display.page.html',
  styleUrls: ['./display.page.scss'],
})
export class DisplayPage {
  @Input() data!: string;
  constructor(private modelCtrl: ModalController) { }

  dismiss() {
    this.modelCtrl.dismiss()
  }

}
