import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { MatListModule } from '@angular/material/list'
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { ItemComponent } from './list/item/item.component';
import { ListFormComponent } from './list-form/list-form.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { TopComponent } from './top/top.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ListComponent } from './list/list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { SearchItemFormComponent } from './search-item-form/search-item-form.component';
import { DeleteEventAutoAlertComponent } from './delete-event-auto-alert/delete-event-auto-alert.component';
import { PageMoveButtonComponent } from './page-move-button/page-move-button.component';
import { MyPageComponent } from './my-page/my-page.component';
import { GarbageComponent } from './garbage/garbage.component';
import { OrderManagementComponent } from './order-management/order-management.component';
import { PurchaseLogComponent } from './purchase-log/purchase-log.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    ItemComponent,
    ListFormComponent,
    HeaderComponent,
    NavigationComponent,
    ListComponent,
    ItemDetailComponent,
    SearchItemFormComponent,
    DeleteEventAutoAlertComponent,
    PageMoveButtonComponent,
    MyPageComponent,
    GarbageComponent,
    OrderManagementComponent,
    PurchaseLogComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatListModule,
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
