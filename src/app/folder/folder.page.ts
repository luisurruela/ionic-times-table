import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  times(num: number) {
    const results = {
      multiplier: num,
      results: [
      '1x' + num + '=' + 1*num,
      '2x' + num + '=' + 2*num,
      '3x' + num + '=' + 3*num,
      '4x' + num + '=' + 4*num,
      '5x' + num + '=' + 5*num,
      '6x' + num + '=' + 6*num,
      '7x' + num + '=' + 7*num,
      '8x' + num + '=' + 8*num,
      '9x' + num + '=' + 9*num,
      '10x' + num + '=' + 10*num
    ]};

    this.router.navigate(['results'], { queryParams: {result: JSON.stringify(results)} });
  }
}
