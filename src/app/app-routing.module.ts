import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndustriesComponent } from './components/industries/industries.component';
import { HomeComponent } from './components/home/home.component';
import { FeaturesComponent } from './components/features/features.component';
import { ReferencesComponent } from './components/references/references.component';
import { SourcesComponent } from './components/sources/sources.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { LayoutsComponent } from './components/layouts/layouts.component';
import { LoginComponent } from './components/login/login.component';
import { CenterComponent } from './components/center/center.component';
import { SupportComponent } from './components/support/support.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { CostComponent } from './components/cost/cost.component';
import { BlogDetailComponent } from './components/blogs/blog-detail/blog-detail.component';

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
        path: 'references',
        component: ReferencesComponent,
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
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
