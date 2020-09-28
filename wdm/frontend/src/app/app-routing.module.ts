import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginCmpComponent } from './login-cmp/login-cmp.component';
import { AboutUsCmpComponent } from './about-us-cmp/about-us-cmp.component';
import { ProductsComponent } from './products/products.component';
import { ServiceComponent } from './service/service.component';
import { ContactUsCmpComponent } from './contact-us-cmp/contact-us-cmp.component';
import { WhyChooseUsComponent } from './why-choose-us/why-choose-us.component';

const routes: Routes = [
  {path: 'login', component: LoginCmpComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'about', component: AboutUsCmpComponent},
  {path: 'service', component: ServiceComponent},
  {path: 'why-choose-us', component: WhyChooseUsComponent},
  {path: 'contact-us', component: ContactUsCmpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
