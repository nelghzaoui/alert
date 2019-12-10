import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'core/models/item.interface';

@Component({
  selector: 'list-component',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() items: Item[];
  @Output() redirect = new EventEmitter<Item>();
  @Output() edit = new EventEmitter<Item>();
  @Output() remove = new EventEmitter<Item>();

  constructor() {}

  ngOnInit(): void {}

  onRedirect(item: Item): void {
    this.redirect.emit(item);
  }

  onEdit(item: Item): void {
    this.edit.emit(item);
  }

  onRemove(item: Item): void {
    this.remove.emit(item);
  }
}
