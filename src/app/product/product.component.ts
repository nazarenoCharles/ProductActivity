import { Component, Input } from '@angular/core';

@Component ({
    selector: 'pm-products',
    templateUrl: './product.component.html'
})


export class ProductComponent{

  
  @Input('product') products: any[];

  ngOnInit() {
    
  }
  
  changeAvailability(){
      this.isVisible = !this.isVisible;
    }

    isVisible: boolean = false;
    searchString: string = '';
    toggleImage(){
        this.searchString = '';
        this.isVisible = !this.isVisible;
    }

    searchProduct(){
        if(this.searchString == "")
        {
            return this.products;
        }
        else{
            return this.products.filter(product => product.productName.toLowerCase().includes(this.searchString)
             || product.productCode.toLowerCase().includes(this.searchString)
             || product.releaseDate.toLowerCase().includes(this.searchString)
             || product.price.toString().startsWith(this.searchString));
        }

    }
}
