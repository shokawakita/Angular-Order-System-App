import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListFormComponent } from './Components/list-form/list-form.component';
import { TopComponent } from './Components/top/top.component'
import { SearchItemFormComponent } from './Components/search-item-form/search-item-form.component';
import { ItemDetailComponent } from './ReUse/item-detail/item-detail.component';
import { MyPageComponent } from './Components/my-page/my-page.component';
import { GarbageComponent } from './Components/garbage/garbage.component';
import { PurchaseLogComponent } from './Components/purchase-log/purchase-log.component';
import { OrderManagementComponent } from './Components/order-management/order-management.component';
import { ConfirmOrderComponent } from './Components/confirm-order/confirm-order.component';

const routes: Routes = [
  { path: '', redirectTo: '/top', pathMatch: 'full' },
  { path: 'list-form', component: ListFormComponent },
  { path: 'top', component: TopComponent },
  { path: 'search-item-form', component: SearchItemFormComponent },
  { path: 'list-form/:id', component: ItemDetailComponent},
  { path: 'my-page', component: MyPageComponent},
  { path: 'garbage', component: GarbageComponent},
  { path: 'purchase-log', component: PurchaseLogComponent},
  { path: 'order-management', component: OrderManagementComponent},
  { path: 'confirm-order', component: ConfirmOrderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled', // enabled で有効化
    anchorScrolling: 'enabled', // enabled で有効化
    scrollOffset: [0, 50] // [x, y] 設定：オフセットを使用する場合のみ記載
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
