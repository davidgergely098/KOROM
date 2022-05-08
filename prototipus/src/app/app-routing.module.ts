import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuardService } from './shared/services/authguard.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home-page.module').then(m => m.HomePageModule),
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile-page/profile/profile-page.module').then(m => m.ProfliePageModule),
    canActivate: [AuthguardGuardService],
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/aboutUs/about/about-page.module').then(m => m.AboutPageModule),
  },
  {
    path: 'history',
    loadChildren: () => import('./pages/hist/history/history-page.module').then(m => m.HistoryPageModule),
    canActivate: [AuthguardGuardService],
},
{
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact/contact-page.module').then(m => m.ContactPageModule),
},
{
    path: 'regist',
    loadChildren: () => import('./pages/regist/regist/regist-page.module').then(m => m.RegistPageModule),
  },
  {
    path: 'cart',
    loadChildren: () => import('./pages/cart/cart-page.module').then(m => m.CartPageModule),
    canActivate: [AuthguardGuardService],
  },
  {
    path: 'delivery-from-cart',
    loadChildren: () => import('./pages/delivery-from-cart/delivery-from-cart-page.module').then(m => m.DeliveryFromCartPageModule),
    canActivate: [AuthguardGuardService],
  },
  {
    path: 'paying',
    loadChildren: () => import('./pages/paying/paying-page.module').then(m => m.PayingPageModule),
    canActivate: [AuthguardGuardService],
  },
  {
    path: 'ordered',
    loadChildren: () => import('./pages/ordered/ordered-page.module').then(m => m.OrderedPageModule),
    canActivate: [AuthguardGuardService],
  },
  {
    path: 'delivery',
    loadChildren: () => import('./pages/delivery/delivery-page.module').then(m => m.DeliveryPageModule),
    canActivate: [AuthguardGuardService],
  },
  {
    path: 'products',
    loadChildren: () => import('./pages/products/products-page.module').then(m => m.ProductsPageModule),
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./pages/sign-in/sign-in-page.module').then(m => m.SignInPageModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin/admin-page.module').then(m => m.AdminPageModule),
  },
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'products',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
