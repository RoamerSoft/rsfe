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
    this.reviewService.getAll().subscribe(reviews => {
      this.reviews = reviews.sort((a, b) => a.order - b.order);
    });
  }

}
