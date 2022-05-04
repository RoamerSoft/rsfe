import { Component, OnInit } from '@angular/core';
import { Review } from '../../../../core/entities/review/review';
import { ReviewService } from '../../../../core/services/review-service/review.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {

  public reviews: Review[];

  constructor(private reviewService: ReviewService) {
  }

  ngOnInit() {
    // Create an empty reviews list
    this.reviews = [new Review(), new Review(), new Review(), new Review(), new Review(), new Review()];
    // Get reviews from server
    this.reviewService.getAll().subscribe(reviews => {
      // Sort reviews by order
      reviews = reviews.sort((a, b) => a.order - b.order);
      // Loop over reviews
      for (let i = 0; i < reviews.length; i++) {
        // Merge reviews with existing empty once
        if (this.reviews[i]) {
          Object.assign(this.reviews[i], reviews[i]);
        } else {
          // Push new once to the list
          this.reviews.push(reviews[i]);
        }
      }
    });
  }
}
