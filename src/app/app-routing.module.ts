import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListFormComponent } from './list-form/list-form.component';
import { TopComponent } from './top/top.component'
import { SearchItemFormComponent } from './search-item-form/search-item-form.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { MyPageComponent } from './my-page/my-page.component';
import { GarbageComponent } from './garbage/garbage.component';
import { PurchaseLogComponent } from './purchase-log/purchase-log.component';
import { OrderManagementComponent } from './order-management/order-management.component';

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
