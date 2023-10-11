import { Component } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
  newItem: string = '';
  items: string[] = [];
  editingIndex: number = -1;
  editedItem: string = ''; // Track the edited item

  addItem() {
    if (this.newItem) {
      this.items.push(this.newItem);
      this.newItem = '';
    }
  }

  editItem(index: number) {
    this.editedItem = this.items[index]; // Store the item being edited
    this.editingIndex = index;
  }

  saveItem() {
    if (this.editingIndex !== -1) {
      this.items[this.editingIndex] = this.editedItem; // Save the edited item
      this.editedItem = ''; // Clear the edited item
      this.editingIndex = -1;
    }
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }
}
