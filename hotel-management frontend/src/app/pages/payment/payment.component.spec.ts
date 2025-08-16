import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../../services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html'
})
export class PaymentComponent implements OnInit {
  totalAmount: number = 0;

  paymentData = {
    name: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  };

  constructor(private paymentService: PaymentService) {}

  ngOnInit(): void {
    this.totalAmount = this.paymentService.getTotal();
  }

  processPayment(): void {
    const { name, cardNumber, expiry, cvv } = this.paymentData;

    if (name && cardNumber && expiry && cvv) {
      alert(`Payment of ₹${this.totalAmount} successful!\nThank you, ${name}`);
      this.paymentData = { name: '', cardNumber: '', expiry: '', cvv: '' };
    } else {
      alert('Please fill in all payment details.');
    }
  }
}
