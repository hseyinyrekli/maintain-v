import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndustriesComponent } from './components/industries/industries.component';
import { FeaturesComponent } from './components/features/features.component';
import { ReferencesComponent } from './components/references/references.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { SourcesComponent } from './components/sources/sources.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutsComponent } from './components/layouts/layouts.component';
import { NavbarComponent } from './components/layouts/navbar/navbar.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SupportComponent } from './components/support/support.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { CostComponent } from './components/cost/cost.component';
import { CenterComponent } from './components/center/center.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BlogDetailComponent } from './components/blogs/blog-detail/blog-detail.component';
import { BlogsPipe } from './components/blogs/blogs.pipe';
import { SignUpComponent } from './components/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    IndustriesComponent,
    FeaturesComponent,
    ReferencesComponent,
    PricingComponent,
    SourcesComponent,
    LoginComponent,
    LayoutsComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    SupportComponent,
    BlogsComponent,
    CostComponent,
    CenterComponent,
    BlogDetailComponent,
    BlogsPipe,
    SignUpComponent,
  ],
  imports: [
    HttpClientModule,
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
