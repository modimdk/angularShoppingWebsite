import {
  Component,
  NgModule,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css'],
})
export class ProductFilterComponent {
  selectedCategories: string[] = [];
  @Output() selectedCategoriesEmmiter = new EventEmitter<string[]>();

  constructor() {}

  onGetCategory(event: any, category: string) {
    // console.log(event,category);
    // console.log(event.target.checked)

    if (event.target.checked) {
      this.selectedCategories.push(category);
    } else {
      const index: number = this.selectedCategories.indexOf(category);
      this.selectedCategories.splice(index, 1);
    }

    console.log(this.selectedCategories);

    this.selectedCategoriesEmmiter.emit(this.selectedCategories);
  }
}
