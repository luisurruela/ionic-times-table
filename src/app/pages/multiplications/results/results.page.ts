import { NumberToTextPipe } from './../../../pipes/number-to-text.pipe';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  result: any;

  constructor(
    private route: ActivatedRoute,
    private alertController: AlertController,
    private numberToText: NumberToTextPipe
  ) {
    this.route.queryParams.subscribe(params => {
      this.result = JSON.parse(params.result);
    });
  }

  ngOnInit() {}

  startExam() {
    // start exam
  }

  async showTip(number: number) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: number + ' x ' + this.result.num + ' = ' + number *  this.result.num,
      subHeader: 'Suma ' + this.numberToText.transform(number) + ' veces el número ' + this.result.num,
      message: 'Suma ' + this.numberToText.transform(number) + ' veces el número ' + this.result.num,
      buttons: ['OK']
    });

    await alert.present();
  }

}
