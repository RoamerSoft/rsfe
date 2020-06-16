import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PriceCard } from 'src/app/entities/price-card/price-card';
import { ContactForm } from 'src/app/models/contact-form/contact-form';
import { ContactFormService } from 'src/app/services/contact-form/contact-form.service';
import { ReCaptchaV3Service } from 'ng-recaptcha';

@Component({
  selector: 'app-wd-checkout',
  templateUrl: './wd-checkout.component.html',
  styleUrls: ['./wd-checkout.component.scss'],
})
export class WdCheckoutComponent implements OnInit {
  // Comes from parent
  public deal: PriceCard;

  public contactForm: ContactForm;

  public nameIsInvalid = false;
  public emailIsInvalid = false;
  public messageIsInvalid = false;

  showForm = true;

  constructor(
    public activeModal: NgbActiveModal,
    private contactFormService: ContactFormService,
    private recaptchaV3Service: ReCaptchaV3Service
  ) {}

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

  public getMessageOnInput(event) {
    this.messageIsInvalid = false;
    document.getElementById('textMsg').textContent = event.target.value;
  }

  public isEven(n: number): boolean {
    return n % 2 === 0;
  }

  public onSubmit() {
    // Check contactForm
    if (!this.isEmpty(this.contactForm.name) && !this.isEmpty(this.contactForm.email) && !this.isEmpty(this.contactForm.message)) {
      // Check email.
      if (!this.validateEmail(this.contactForm.email)) {
        // Show email error
        this.emailIsInvalid = true;
      } else {
        // Set text from message because name is now set.
        this.contactForm.message = document.getElementById('textMsg').textContent;
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

      if (this.isEmpty(this.contactForm.message)) {
        this.messageIsInvalid = true;
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
