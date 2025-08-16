// src/app/pages/payment/payment.component.ts
import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../../services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'] // ✅ Ensure this CSS file exists or remove this line
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

      const modalEl = document.getElementById('paymentModal');
      if (modalEl) {
        const modal = (window as any).bootstrap.Modal.getInstance(modalEl);
        modal?.hide();
      }
    } else {
      alert('Please fill in all payment details.');
    }
  }
}
