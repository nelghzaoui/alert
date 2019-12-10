import { Component, OnInit } from '@angular/core';
import { Item } from '@core/models/item.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss']
})
export class ListPage implements OnInit {
  items = [
    { description: 'Angular' },
    { description: 'React' },
    { description: 'Vue' },
    { description: 'Ionic' }
  ];

  constructor() {}

  ngOnInit(): void {}

  onRedirect(item: Item): void {
    console.log(item);
  }
}
