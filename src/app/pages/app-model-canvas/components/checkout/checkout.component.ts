import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { ContactForm } from 'src/app/core/models/contact-form/contact-form';
import { ContactFormService } from 'src/app/core/services/contact-form/contact-form.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  public contactForm: ContactForm;

  public nameIsInvalid = false;
  public emailIsInvalid = false;

  public showForm = true;

  constructor(
    public activeModal: NgbActiveModal,
    private contactFormService: ContactFormService,
    private recaptchaV3Service: ReCaptchaV3Service
  ) {
  }

  ngOnInit() {
    this.contactForm = new ContactForm();
    // Workaround for showing error when default text is untouched
    this.contactForm.message = 'Default';
  }

  public getNameOnInput(event) {
    this.nameIsInvalid = false;
    this.contactForm.name = event.target.value;
  }

  public getEmailOnInput(event) {
    this.emailIsInvalid = false;
    this.contactForm.email = event.target.value;
  }


  public onSubmit() {
    // Check form
    if (!this.isEmpty(this.contactForm.name) && !this.isEmpty(this.contactForm.email)) {
      // Check email.
      if (!this.validateEmail(this.contactForm.email)) {
        // Show email error
        this.emailIsInvalid = true;
      } else {
        // Get text from message because name is now set.
        this.contactForm.message = 'e-book';
        // Get reCAPTCHA token
        this.recaptchaV3Service.execute('contactFormPost').subscribe((token) => {
          this.contactForm.token = token;
          // Send form
          this.contactFormService.post(this.contactForm).subscribe();
          this.showForm = false;
        });
      }
    } else {
      if (this.isEmpty(this.contactForm.name)) {
        this.nameIsInvalid = true;
      }

      if (this.isEmpty(this.contactForm.email)) {
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
