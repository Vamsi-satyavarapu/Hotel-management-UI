import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private totalAmount = 0;

  setTotal(amount: number) {
    this.totalAmount = amount;
  }

  getTotal(): number {
    return this.totalAmount;
  }
}