import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; //http
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; //formsModule ngModel'in çalışabilmesi için //reacktive formalar için product- add
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; //animasyonları için module

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { NaviComponent } from './components/navi/navi.component';
import { TodoComponent } from './components/todo/todo.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';

import { ToastrModule } from 'ngx-toastr'; //toastr modulü
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { LoginComponent } from './components/login/login.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';

@NgModule({
  declarations: [
    //kullanılacak componentler
    AppComponent,
    ProductComponent,
    CategoryComponent,
    NaviComponent,
    TodoComponent,
    VatAddedPipe,
    FilterPipePipe,
    CartSummaryComponent,
    ProductAddComponent,
    LoginComponent,
  ],
  imports: [
    //farklı projelerden gelen modüller
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, //http için injectionu yapan bu
    FormsModule, //ngModel gibi şeyler için
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      //toastr için
      positionClass: 'toast-bottom-right', //yeri
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
