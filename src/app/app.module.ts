import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { MatListModule } from '@angular/material/list'
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { ItemComponent } from './ReUse/list/item/item.component';
import { ListFormComponent } from './Components/list-form/list-form.component';
import { HeaderComponent } from './Components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { TopComponent } from './Components/top/top.component';
import { NavigationComponent } from './Components/navigation/navigation.component';
import { ListComponent } from './ReUse/list/list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ItemDetailComponent } from './ReUse/item-detail/item-detail.component';
import { SearchItemFormComponent } from './Components/search-item-form/search-item-form.component';
import { PageMoveButtonComponent } from './ReUse/page-move-button/page-move-button.component';
import { MyPageComponent } from './Components/my-page/my-page.component';
import { GarbageComponent } from './Components/garbage/garbage.component';
import { OrderManagementComponent } from './Components/order-management/order-management.component';
import { PurchaseLogComponent } from './Components/purchase-log/purchase-log.component';
import { ConfirmOrderComponent } from './Components/confirm-order/confirm-order.component';
import { ConfirmListComponent } from './Components/confirm-order/confirm-list/confirm-list.component';
import { PurchaseListComponent } from './Components/purchase-log/purchase-list/purchase-list.component';
import { PurchaseItemComponent } from './Components/purchase-log/purchase-list/purchase-item/purchase-item.component';
import { ItemDetailButtonComponent } from './ReUse/item-detail/item-detail-button/item-detail-button.component';
import { ImageComponent } from './ReUse/image/image.component';
import { DeleteEventAutoAlertComponent } from './ReUse/delete-event-auto-alert/delete-event-auto-alert.component';

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
    PageMoveButtonComponent,
    MyPageComponent,
    GarbageComponent,
    OrderManagementComponent,
    PurchaseLogComponent,
    ConfirmOrderComponent,
    ConfirmListComponent,
    PurchaseListComponent,
    PurchaseItemComponent,
    ItemDetailButtonComponent,
    ImageComponent,
    DeleteEventAutoAlertComponent,
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
