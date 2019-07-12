import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'pm-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  @Output() addNewProduct : EventEmitter<any> = new EventEmitter();
  
  imageUrl: string;
  productName: string;
  productCode: string;
  productId: string;
  releaseDate: string;
  price: string;
  rating: string;
  newProduct: any;

  onAddNewProduct(){

    console.log("Add New Product");
    this.newProduct = {
      imageUrl: this.imageUrl,
      productName: this.productName,
      productCode: this.productCode,
      productId: this.productId,
      releaseDate: this.releaseDate,
      price: this.price,
      rating: this.rating
    }
    console.log(this.newProduct)
    this.addNewProduct.emit(this.newProduct);
    
    this.imageUrl = "";
    this.productName ="";
    this.productCode ="";
    this.productId ="";
    this.releaseDate ="";
    this.price = "";
    this.rating =  "";
    
  }
  constructor() { }

  ngOnInit() {
  }

}
