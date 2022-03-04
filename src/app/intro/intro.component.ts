import { Component, OnInit } from '@angular/core';


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
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  constructor() { }

  isDesktop = true;

  private mediaService = new MediaService('(min-width: 769px)');

  ngOnInit() {
    this.mediaService.match$.subscribe(value => this.isDesktop = value);
  }

}
