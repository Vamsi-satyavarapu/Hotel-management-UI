import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fees',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fees.component.html',
  styleUrls: ['./fees.component.css']
})
export class FeesComponent {
  feeList = [
    {
      type: 'Single Room',
      monthly: '₹5,000',
      annual: '₹55,000'
    },
    {
      type: 'Double Sharing',
      monthly: '₹3,500',
      annual: '₹38,000'
    },
    {
      type: 'Family',
      monthly: '₹10,000',
      annual: '₹1,10,000'
    }
  ];
}
