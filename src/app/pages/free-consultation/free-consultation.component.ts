import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {TranslationService} from 'src/app/core/services/translation-service/translation.service';
import {environment} from '../../../environments/environment';
import {TypeFormComponent} from '../../shared/components/type-form/type-form.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {BgaModalComponent} from "../../shared/components/bga-modal/bga-modal.component";

@Component({
  selector: 'app-free-consultation',
  templateUrl: './free-consultation.component.html',
  styleUrls: ['./free-consultation.component.scss'],
})
export class FreeConsultationComponent implements OnInit, AfterViewInit {
  public loadAPI: Promise<any>;
  public consultationFormId = environment.consultationFormId;
  public consultationFormIdMobile = environment.consultationFormIdMobile;
  public heightCorrection = 80;
  public heightCorrectionMobile = 48;
  public minimalWidthForDesktopTypeForm = 1227;
  public formInModalMode = true;
  public screenWidth: number;
  public screenHeight: number;

  public bgaShowed: boolean;
  public bgaStorageKey = 'bgaShowed';


  /**
   * [0] = Title
   * [1] = Description
   * [2] = Keywords
   * [3] = Image for link (og:image)
   */
  private metaDataTranslateKeys = [
    'Gratis adviesgesprek',
    'Plan hier je gratis adviesgesprek!',
    'Adviesgesprek, App ontwikkeling, Bas Gerritsen, RoamerSoft',
    'https://www.roamersoft.com/assets/images/roamersoft/Bas-Gerritsen.jpg'
  ];

  constructor(
    private title: Title,
    private meta: Meta,
    private translationService: TranslationService,
    private modalService: NgbModal
  ) {
    this.loadAPI = new Promise((resolve) => {
      this.loadScript();
      resolve(true);
    });
  }

  async ngOnInit() {
    // Check if bga is showed
    const localStorageBgaStatus = localStorage.getItem(this.bgaStorageKey);
    this.bgaShowed = !!localStorageBgaStatus;
    await this.setTranslationAndMetaData();
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    this.heightCorrection = this.screenWidth > this.minimalWidthForDesktopTypeForm ? 80 : 45;
  }

  public openForm() {
    setTimeout(() => {
      const modalRef = this.modalService.open(TypeFormComponent, {size: 'xl', backdrop: 'static', keyboard: false});
      // Set modal settings
      modalRef.componentInstance.height = this.screenHeight;
      modalRef.componentInstance.modalMode = this.formInModalMode;
      // Check screen width
      if (this.screenWidth > this.minimalWidthForDesktopTypeForm) {
        // Large screens
        modalRef.componentInstance.formId = this.consultationFormId;
        modalRef.componentInstance.heightCorrection = this.heightCorrection;
      } else {
        // Mobile screens
        modalRef.componentInstance.formId = this.consultationFormIdMobile;
        modalRef.componentInstance.heightCorrection = this.heightCorrectionMobile;
      }
    }, 150);
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

  public showBGA(): void {
    if (!this.bgaShowed) {
      // Set bga as showed
      this.bgaShowed = true;
      // Save bga showed
      localStorage.setItem(this.bgaStorageKey, this.bgaStorageKey);
      // Create modal
      const modalRef = this.modalService.open(BgaModalComponent, {size: 'lg'});
      // Set text
      modalRef.componentInstance.boldTitle = 'Efficiënter werken, kosten besparen of je klantvriendelijkheid verhogen';
      modalRef.componentInstance.title = 'met een eigen app?';
      modalRef.componentInstance.body = 'Plan nu een <strong>gratis adviesgesprek </strong> en verzeker jezelf dat je de juiste eerste stap zet naar een <strong>op maat</strong> gemaakte applicatie.';
      modalRef.componentInstance.buttonText = 'Adviesgesprek inplannen';
      // Listen to response
      modalRef.componentInstance.buttonClicked.subscribe(() => {
        modalRef.componentInstance.buttonClicked.unsubscribe();
        modalRef.close();
        this.openForm();
      })
    }

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
