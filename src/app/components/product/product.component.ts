import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  dataLoaded = false;
  filterText = '';

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute, //built in anguların servisi aktifleştirilmiş route route okumasını sağlamak
    private toastrService: ToastrService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      //observableları subscribe olmamız gerekiyor... params parametreler demek
      if (params['categoryId']) {
        this.getProductsByCategory(params['categoryId']);
      } else {
        this.getProducts();
      }
    });
  }

  getProducts() {
    this.productService.getProducts().subscribe((response) => {
      //subscribe response için ve dışı benzer zamanlarda çalışabiliyor
      //kendiğliğinden asenkron çalışır ..
      //Observable //subscribe devam ettirmek için
      this.products = response.data; //response = yanıt
      this.dataLoaded = true; // bu
    });
  }

  getProductsByCategory(categoryId: number) {
    this.productService
      .getProductsByCategory(categoryId)
      .subscribe((response) => {
        this.products = response.data;
        this.dataLoaded = true;
      });
  }

  addToCart(product: Product) {
    //karta eklemek için
    if (product.productId === 1) {
      this.toastrService.error('Hata', 'Bu ürün sepete eklenemez');
    } else {
      this.toastrService.success('Sepete eklendi', product.productName);
      this.cartService.addToCart(product);
    }
  }
}
