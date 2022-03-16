import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.page.html',
  styleUrls: ['./exam.page.scss'],
})
export class ExamPage implements OnInit {
  multiplier: number;
  multiplication: string;
  resultInput: any;
  result: number;
  history = {
    amount: 0,
    hits: 0,
    mistakes: 0
  };

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.multiplier = JSON.parse(params.multiplier);
    });

    this.nextMultiplication();
  }

  nextMultiplication() {
    const randomNumber = Math.floor(Math.random() * 2);
    const randomMultiplier = Math.floor(Math.random() * 10) + 1;
    this.result = this.multiplier * randomMultiplier;
    console.log(this.result);
    if (randomNumber === 0) {
      this.multiplication = `${this.multiplier} x ${randomMultiplier}`;
    } else {
      this.multiplication = `${randomMultiplier} x ${this.multiplier}`;
    }
  }

  checkResult() {
    this.history.amount++;
    if (Number(this.result) === Number(this.resultInput)) {
      this.history.hits++;
    } else {
      this.history.mistakes++;
    }
    this.nextMultiplication();
    this.resultInput = '';
  }

}
