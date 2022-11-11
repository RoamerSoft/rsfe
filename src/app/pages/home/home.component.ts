import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {TranslationService} from 'src/app/core/services/translation-service/translation.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {environment} from '../../../environments/environment';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {InfographicCheckoutComponent} from './components/infographic-checkout/infographic-checkout.component';

@Component({
  selector: 'app-home',
  animations: [
    trigger('openCloseDesktop', [
      state('open', style({
        right: '0',
      })),
      state('closed', style({
        right: '-375px',
      })),
      transition('open => closed', [
        animate('0.5s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
    trigger('openCloseMobile', [
      state('open', style({
        top: '80px',
      })),
      state('closed', style({
        top: '-350px',
      })),
      transition('open => closed', [
        animate('0.6s')
      ]),
      transition('closed => open', [
        animate('0.6s')
      ]),
    ]),
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  public showDesktopMagnet = false;
  public showMobileMagnet = false;
  public screenHeight: number;
  public screenWidth: number;
  public enableEbook = environment.enableEbook;
  public contactFormId = environment.contactFormId;
  public contactFormIdMobile = environment.contactFormIdMobile;
  public magnetEnabled: boolean;
  public showInfographicButton: boolean;
  public minimalWidthForDesktopMagnet = 450;
  public minimalWidthForDesktopTypeForm = 1227;

  @ViewChild('magnetTrigger', {static: false}) private magnetTrigger: ElementRef<HTMLDivElement>;
  public magnetTriggerScrolledIntoView: boolean;
  public magnetStorageKey = 'showedMagnet';

  public currentLang: string;

  /**
   * [0] = Title
   * [1] = Description
   * [2] = Keywords
   * [3] = Image for link (og:image)
   */
  private metaDataTranslateKeys = [
    'Web en app ontwikkeling',
    'Op maat gemaakte webapplicaties en cross-platform mobiele apps die je helpen je doelen te bereiken.',
    'App ontwikkeling, Web ontwikkeling, RoamerSoft, Bas Gerritsen, Full stack software developer, Cross platform, Mobiele app, Webapplicatie',
    'https://www.roamersoft.com/assets/images/roamersoft/Bas-Gerritsen.jpg'
  ];

  constructor(
    private title: Title,
    private meta: Meta,
    private translationService: TranslationService,
    private modalService: NgbModal,
  ) {
  }

  async ngOnInit() {
    await this.setTranslationAndMetaData();
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    this.currentLang = this.translationService.getLang();
    this.magnetEnabled = this.currentLang === 'nl' && this.enableEbook;
    this.showInfographicButton = this.currentLang === 'nl';
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

  languageChanged(language: string) {
    this.currentLang = language;
    this.magnetEnabled = language === 'nl' && this.enableEbook;
    this.showInfographicButton = language === 'nl';
  }

  public showMagnet(): void {
    if (this.screenWidth > this.minimalWidthForDesktopMagnet) {
      this.showDesktopMagnet = true;
    } else {
      this.showMobileMagnet = true;
    }
  }

  /**
   * Runs on every scroll and checks if magnet should be triggered.
   */
  @HostListener('window:scroll', [])
  isScrolledIntoView(): void {
    // Check if element exists and is enabled
    if (this.magnetTrigger && this.magnetEnabled) {
      // Get element information
      const rect = this.magnetTrigger.nativeElement.getBoundingClientRect();
      const topShown = rect.top >= 0;
      const bottomShown = rect.bottom <= window.innerHeight;
      this.magnetTriggerScrolledIntoView = topShown && bottomShown;
      // Check if element is visible
      if (this.magnetTriggerScrolledIntoView) {
        // Check if magnet was showed before in this session
        const magnetHasBeenShowed = sessionStorage.getItem(this.magnetStorageKey);
        if (!magnetHasBeenShowed) {
          // Show magnet if not showed before
          this.showMagnet();
        }
      }
    }
  }

  public closeMagnet() {
    // Close magnet
    this.showDesktopMagnet = false;
    this.showMobileMagnet = false;

    // Set magnet as showed in this session
    sessionStorage.setItem(this.magnetStorageKey, 'true');
  }

  public openInfographicCheckout() {
    setTimeout(() => {
      this.modalService.open(InfographicCheckoutComponent);
    }, 150);
  }

  public async setTranslationAndMetaData() {
    return new Promise<void>((resolve) => {
      this.translationService.setTranslation().then(() => {
        this.translationService
          .getTranslationByKey(this.metaDataTranslateKeys)
          .subscribe((resAsJson) => {
            this.title.setTitle(resAsJson[this.metaDataTranslateKeys[0]]);
            this.meta.updateTag({
              name: 'description',
              content: resAsJson[this.metaDataTranslateKeys[1]],
            });
            this.meta.updateTag({
              name: 'keywords',
              content: resAsJson[this.metaDataTranslateKeys[2]],
            });
            this.meta.updateTag({
              property: 'og:image',
              content: resAsJson[this.metaDataTranslateKeys[3]],
            });
            resolve();
          });
      });
    });
  }
}
