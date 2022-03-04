import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { IntroComponent } from './intro/intro.component';
import { TechnologyComponent } from './technology/technology.component';
import { ServiceComponent } from './service/service.component';
import { CommunityComponent } from './community/community.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FooterComponent } from './footer/footer.component';

import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';

// import { MdbNavbar } from "mdb-angular-ui-kit/carousel";

// import {
//   FontAwesomeModule,
//   FaIconLibrary,
// } from '@fortawesome/angular-fontawesome';

// import { IvyCarouselModule } from 'angular-responsive-carousel';
import { AboutComponent } from './about/about.component';

import { SwiperModule } from 'swiper/angular';

// import {
//   FontAwesomeModule,
//   FaIconLibrary,
// } from '@fortawesome/angular-fontawesome';

import { NgxParallaxScrollModule } from 'ngx-parallax-scroll';

import { ParallaxDirective } from './parallax.directive';
import { ParaMouseModule } from 'ngx-para-mouse'

// import { ParallaxMousemoveModule } from "ngx-parallax-mousemove";
@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    // MDBBootstrapModule.forRoot(),
    MdbCarouselModule,
    SwiperModule,
    // NgxParallaxScrollModule,
    // ParaMouseModule,
    // ParallaxMousemoveModule,
    // CommonModule,

    RouterModule.forRoot([
      { path: '', component: AppComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
    ]),
    // FontAwesomeModule,
  ],
  declarations: [AppComponent, TopBarComponent, ProductListComponent,
    ProductAlertsComponent, ProductDetailsComponent, CartComponent,
    IntroComponent, TechnologyComponent, ServiceComponent, CommunityComponent,
    PortfolioComponent, FooterComponent, AboutComponent,
    ParallaxDirective,
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {

}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
