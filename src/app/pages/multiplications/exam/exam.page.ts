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
  result: number;

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
    if (randomNumber === 0) {
      this.multiplication = `${this.multiplier} x ${randomMultiplier}`;
    } else {
      this.multiplication = `${randomMultiplier} x ${this.multiplier}`;
    }
  }

}
