import { Component, OnInit } from '@angular/core';
import { Category } from './category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [CategoryService]
})
export class CategoryComponent implements OnInit {
  constructor(private categoryService: CategoryService) {
    this.categories = [];
  }
  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => this.categories = data);
  }

  title: string = "Kategori Listesi";
  categoryHeader: string = "Tüm Ürünler";
  categories: Category[]
}
