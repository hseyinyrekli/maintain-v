import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndustriesComponent } from './components/industries/industries.component';
import { HomeComponent } from './components/home/home.component';
import { FeaturesComponent } from './components/features/features.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { LayoutsComponent } from './components/layouts/layouts.component';
import { LoginComponent } from './components/login/login.component';
import { CenterComponent } from './components/center/center.component';
import { SupportComponent } from './components/support/support.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { CostComponent } from './components/cost/cost.component';
import { BlogDetailComponent } from './components/blogs/blog-detail/blog-detail.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AboutComponent } from './components/about/about.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutsComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'industries',
        component: IndustriesComponent,
      },
      {
        path: 'features',
        component: FeaturesComponent,
      },

      {
        path: 'pricing',
        component: PricingComponent,
      },
      {
        path: 'center',
        component: CenterComponent,
      },
      {
        path: 'support',
        component: SupportComponent,
      },
      {
        path: 'blogs',
        component: BlogsComponent,
      },
      {
        path: 'blogs/:slug',
        component: BlogDetailComponent,
      },
      {
        path: 'cost',
        component: CostComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignUpComponent,
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      useHash: false,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
