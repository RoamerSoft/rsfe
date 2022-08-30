import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ContactFormService } from '../../../core/services/contact-form/contact-form.service';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { SubscribeForm } from '../../../core/models/subscribe-form';
import { SubscriptionService } from '../../../core/services/subscription/subscription.service';

@Component({
  selector: 'app-magnet',
  templateUrl: './magnet.component.html',
  styleUrls: ['./magnet.component.scss']
})
export class MagnetComponent implements OnInit {
  public subscribeForm: SubscribeForm;

  public nameIsInvalid = false;
  public emailIsInvalid = false;

  public showForm = true;

  @Output() closeMagnet = new EventEmitter<void>();
  private autoCloseTimeWhenSuccessful = 10000;

  constructor(
    private contactFormService: ContactFormService,
    private recaptchaV3Service: ReCaptchaV3Service,
    private subscriptionServices: SubscriptionService) {
  }

  ngOnInit() {
    this.subscribeForm = new SubscribeForm();
  }


  public getNameOnInput(event) {
    this.nameIsInvalid = false;
    this.subscribeForm.firstName = event.target.value;
  }

  public getEmailOnInput(event) {
    this.emailIsInvalid = false;
    this.subscribeForm.email = event.target.value;
  }

  public onSubmit() {
    // Check form
    if (!this.isEmpty(this.subscribeForm.firstName) && !this.isEmpty(this.subscribeForm.email)) {
      // Check email.
      if (!this.validateEmail(this.subscribeForm.email)) {
        // Show email error
        this.emailIsInvalid = true;
      } else {
        // Get reCAPTCHA token
        this.recaptchaV3Service.execute('EbookSubscription').subscribe((token) => {
          // Set token
          this.subscribeForm.token = token;
          // Subscribe
          this.subscriptionServices.subscribeToEbook(this.subscribeForm).subscribe();
          // Show success message
          this.showForm = false;
          // Auto close magnet
          setTimeout(() => {
            this.closeMagnet.emit();
          }, this.autoCloseTimeWhenSuccessful);
        });
      }
    } else {
      if (this.isEmpty(this.subscribeForm.firstName)) {
        this.nameIsInvalid = true;
      }

      if (this.isEmpty(this.subscribeForm.email)) {
        this.emailIsInvalid = true;
      }
    }
  }

  /**
   * Check input for undefined of empty string
   * @param input The input to check
   */
  private isEmpty(input: string) {
    return input === undefined || input === '';
  }

  /** Check if email had characters before and after @ and has more than 2 characters after the dot */
  private validateEmail(email) {
    // tslint:disable-next-line: max-line-length
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

}
