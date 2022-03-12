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
    this.route.queryParams.subscribe((params) => {
      this.result = JSON.parse(params.result);
    });
  }

  ngOnInit() {}

  startExam() {
    // start exam
  }

  async getAddition(num: number) {
    let text = '';
    while (num > 0) {
      text =
        num - 1 > 0
          ? text + '' + this.result.num + ' + '
          : text + '' + this.result.num + '';
      num--;
    }
    return text;
  }

  async showTip(num: number) {
    const text = await this.getAddition(num);
    const subheader =
      num > 1
        ? 'Suma ' +
          this.numberToText.transform(num) +
          ' veces el número ' +
          this.result.num
        : 'Todo número multiplicado por 1 es igual al mismo número.';
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: num + ' x ' + this.result.num + ' = ' + num * this.result.num,
      subHeader: subheader,
      message: '' + text + ' = ' + num * this.result.num,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
