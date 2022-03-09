import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-multiplications',
  templateUrl: './multiplications.page.html',
  styleUrls: ['./multiplications.page.scss'],
})
export class MultiplicationsPage implements OnInit {
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(private router: Router) {}

  ngOnInit() {}

  times(num: number) {
    const results = {num};

    this.router.navigate(['multiplications/results'], {
      queryParams: { result: JSON.stringify(results) },
    });
  }
}
