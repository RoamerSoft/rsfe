import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { SubscriptionService } from '../../../../core/services/subscription/subscription.service';
import { SubscribeForm } from '../../../../core/models/subscribe-form';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  public subscribeForm: SubscribeForm;

  public nameIsInvalid = false;
  public emailIsInvalid = false;

  public showForm = true;

  constructor(
    public activeModal: NgbActiveModal,
    private subscriptionServices: SubscriptionService,
    private recaptchaV3Service: ReCaptchaV3Service
  ) {
  }

  ngOnInit() {
    this.subscribeForm = new SubscribeForm();
  }

  public getNameOnInput(firstname: string) {
    this.nameIsInvalid = false;
    this.subscribeForm.firstName = firstname;
  }

  public getEmailOnInput(email: string) {
    this.emailIsInvalid = false;
    this.subscribeForm.email = email;
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
          this.subscribeForm.token = token;
          // Send form
          this.subscriptionServices.subscribeToEbook(this.subscribeForm).subscribe();
          this.showForm = false;
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
