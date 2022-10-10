import { AfterViewInit, Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit, AfterViewInit {
  public dropInBlogUrl = environment.dropInBlogUrl;

  constructor() {
  }

  async ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.loadScript();
  }

  public loadScript() {
    let isFound = false;
    const scripts = document.getElementsByTagName('script');
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < scripts.length; ++i) {
      if (
        scripts[i].getAttribute('src') != null &&
        scripts[i].getAttribute('src').includes('loader')
      ) {
        isFound = true;
      }
    }

    if (!isFound) {
      const dynamicScripts = [
        '/assets/js/jquery.js',
        '/assets/js/popper.min.js',
        '/assets/js/plugins.js',
        '/assets/js/functions.js',
        this.dropInBlogUrl
      ];

      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < dynamicScripts.length; i++) {
        const node = document.createElement('script');
        node.src = dynamicScripts[i];
        node.type = 'text/javascript';
        node.async = false;
        // tslint:disable-next-line: deprecation
        node.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(node);
      }
    }
  }
}
