import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation, ViewChild } from "@angular/core";
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination, Swiper, SwiperOptions } from "swiper";


// install Swiper modules
// SwiperCore.use([Pagination]);

import { ReplaySubject, Subject } from "rxjs";

interface MediaQueryList extends EventTarget {
  matches: boolean; // => true if document matches the passed media query, false if not
  media: string; // => the media query used for the matching
}


class MediaService {
  private matches = new ReplaySubject<boolean>(1);
  public match$ = this.matches.asObservable();

  constructor(public readonly query: string) {
    // we need to make sure we are in browser
    if (window) {
      const mediaQueryList = window.matchMedia(this.query);
      // here we pass value to our ReplaySubject
      const listener = (event: any) => this.matches.next(event.matches);
      // run once and then add listener
      listener(mediaQueryList);
      mediaQueryList.addEventListener('change', listener);
    }
  }
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],

})
export class PortfolioComponent implements OnInit {

  constructor() { }
  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;

  isDesktop = true;

  private mediaService = new MediaService('(min-width: 769px)');

  ngOnInit() {
    this.mediaService.match$.subscribe(value => this.isDesktop = value);
  }
  onSwiper(swiper: any) {
    console.log(swiper);
    for (let i = 0; i < swiper.slides.length; i++) {
      swiper.slides[i].style["border-radius"] = "20px";
      console.log('radius');
    }
  }
  slideNext() {
    this.swiper?.swiperRef.slideNext(400)
    // this.swiper?.s_realIndexChange
    // window.alert('The product has been shared!');
  }
  slidePrev() {
    this.swiper?.swiperRef.slidePrev(400)
  }
  // onSlideChange(swiper: any) {
  //   console.log(swiper.slides.length);

  //   let index_currentSlide = swiper.realIndex;
  //   let currentSlide = swiper.slides[index_currentSlide]
  //   console.log(currentSlide);
  //   for (let i = 0; i < swiper.slides.length; i++) {
  //     swiper.slides[i].style["background"] = 'none';
  //     swiper.slides[i].style["border"] = 'none';
  //     swiper.slides[i].style["border-radius"] = '0';
  //     swiper.slides[i].style["box-shadow"] = 'none';
  //   }
  //   currentSlide.style["background"] = "white";
  //   currentSlide.style["border"] = "solid 1px #eef4ff";
  //   currentSlide.style["border-radius"] = "26px";
  //   currentSlide.style["box-shadow"] = "0px 30px 40px 0 rgba(56, 108, 243, 0.1)";
  // }
}
