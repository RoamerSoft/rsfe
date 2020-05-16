import { Component, OnInit } from '@angular/core';
import { ContactForm } from 'src/app/models/contact-form/contact-form';
import { ContactFormService } from 'src/app/services/contact-form/contact-form.service';
import { ReCaptchaV3Service } from 'ng-recaptcha';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public param;
  public error: string;
  public success: string;

  public input = new ContactForm();

  constructor(private contactFormService: ContactFormService, private recaptchaV3Service: ReCaptchaV3Service) {}

  ngOnInit() {
    this.param = { year: new Date().getFullYear() };
  }

  public onSubmit() {
    // Check input
    if (!this.isEmpty(this.input.name) && !this.isEmpty(this.input.email) && !this.isEmpty(this.input.message)) {
      // Check email.
      if (!this.validateEmail(this.input.email)) {
        // Show email error
        this.error = 'Email address is incorrect!';
        this.success = undefined;
      } else {
        // Get reCAPTCHA token
        this.recaptchaV3Service.execute('importantAction').subscribe((token) => {
          this.input.token = token;
          // Send form
          this.contactFormService.post(this.input).subscribe((res) => {
            console.log(res);
          });
          // Hide error message
          this.error = undefined;
          // Show success message.
          this.success = 'Your message is sent!';
          // Hide success message after 3 seconds
          setTimeout(() => {
            this.success = undefined;
          }, 3000);
        });
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
