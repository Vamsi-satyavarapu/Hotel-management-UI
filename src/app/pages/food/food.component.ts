import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

type Category = 'breakfast' | 'lunch' | 'dinner';

interface FoodItem {
  name: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-food',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent {
  category: Category = 'breakfast';
  orderedItems: FoodItem[] = [];

  paymentDetails = {
    name: '',
    phone: '',
    roomNumber: '',
    method: 'Cash'
  };

  menu: Record<Category, FoodItem[]> = {
    breakfast: [
      { name: 'Idli & Sambar', price: 50, image: 'https://i.imgur.com/HtXUXPc.jpg' },
      { name: 'Poori & Aloo Curry', price: 60, image: 'https://www.spiceupthecurry.com/wp-content/uploads/2016/01/poori-masala-recipe-12.jpg' },
      { name: 'Upma & Chutney', price: 40, image: 'https://i.pinimg.com/474x/e8/eb/86/e8eb8676e2b21ba6961d444ea75d09f8.jpg' }
    ],
    lunch: [
      { name: 'Rice, Sambar, Veg Fry', price: 100, image: 'https://i0.wp.com/www.chitrasfoodbook.com/wp-content/uploads/2018/03/cabbage-sambar-recipe.jpg?ssl=1' },
      { name: 'Curd Rice', price: 40, image: 'https://www.chefkunalkapur.com/wp-content/uploads/2023/05/DSC09411-scaled.jpg?v=1684031938' },
      { name: 'Chicken Biryani', price: 150, image: 'https://www.masalakorb.com/wp-content/uploads/2017/02/Chicken-Biryani-Pressure-Cooker-Recipe-V1.jpg' }
    ],
    dinner: [
      { name: 'Chapati & Kurma', price: 70, image: 'https://i.pinimg.com/564x/cd/bc/d0/cdbcd05b61522a7f8299db1ec4293726.jpg' },
      { name: 'Chicken Biryani', price: 150, image: 'https://www.masalakorb.com/wp-content/uploads/2017/02/Chicken-Biryani-Pressure-Cooker-Recipe-V1.jpg' },
      { name: 'Curd Rice', price: 40, image: 'https://www.chefkunalkapur.com/wp-content/uploads/2023/05/DSC09411-scaled.jpg?v=1684031938' }
    ]
  };

  get filteredItems(): FoodItem[] {
    return this.menu[this.category];
  }

  selectCategory(cat: Category): void {
    this.category = cat;
  }

  orderItem(item: FoodItem): void {
    this.orderedItems.push(item);
  }

  removeItem(index: number): void {
    this.orderedItems.splice(index, 1);
  }

  getTotal(): number {
    return this.orderedItems.reduce((sum, item) => sum + item.price, 0);
  }

  openPaymentModal(): void {
    const total = this.getTotal();
    if (total === 0) {
      alert('❗ No items in the cart!');
      return;
    }

    const modalElement = document.getElementById('paymentModal');
    const modalTotal = document.getElementById('modalTotal');

    if (modalTotal) {
      modalTotal.textContent = `Total to Pay: ₹${total}`;
    }

    if (modalElement) {
      const modal = new (window as any).bootstrap.Modal(modalElement);
      modal.show();
    }
  }

  payNow(): void {
    const { name, phone, roomNumber } = this.paymentDetails;
    if (!name.trim() || !phone.trim() || !roomNumber.trim()) {
      alert('⚠️ Please fill in Name, Phone, and Room Number before submitting.');
      return;
    }

    alert(`✅ Payment of ₹${this.getTotal()} successful! Thank you ${name} (Room: ${roomNumber}).`);
    this.orderedItems = [];

    const modalElement = document.getElementById('paymentModal');
    if (modalElement) {
      const modal = (window as any).bootstrap.Modal.getInstance(modalElement);
      modal?.hide();
    }

    this.paymentDetails = {
      name: '',
      phone: '',
      roomNumber: '',
      method: 'Cash'
    };

    const modalTotal = document.getElementById('modalTotal');
    if (modalTotal) {
      modalTotal.textContent = 'Total to Pay: ₹0';
    }
  }
}
