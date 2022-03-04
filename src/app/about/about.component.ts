import { Component, OnInit } from '@angular/core';

import { ViewEncapsulation, ViewChild } from "@angular/core";
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";


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
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AboutComponent implements OnInit {

  constructor() { }

  isDesktop = true;

  private mediaService = new MediaService('(min-width: 769px)');

  ngOnInit() {
    this.mediaService.match$.subscribe(value => this.isDesktop = value);
  }

  loopNumber = [1, 2, 3, 4, 5, 6, 7]

  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;
  slideNext() {
    this.swiper?.swiperRef.slideNext(100)

  }

  onSwiper(swiper: any) {

  }
  onSlideChange(swiper: any) {
    console.log('about length', swiper.slides.length);
  }
}
