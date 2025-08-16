import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

interface User {
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-user-table',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent {
  users: User[] = [];
  newUser: Partial<User> = {};
  editUser: Partial<User> = {};
  editUserId: number | null = null;

  // Open Create Table (add first user) modal
  openCreateModal(): void {
    this.newUser = {};
    const modal = document.getElementById('addModal');
    if (modal) {
      const modalInstance = new (window as any).bootstrap.Modal(modal);
      modalInstance.show();
    }
  }

  addUser(): void {
    if (!this.newUser.name || !this.newUser.email) {
      alert('Name and Email are required.');
      return;
    }

    const newId = this.users.length ? Math.max(...this.users.map(u => u.id)) + 1 : 1;
    this.users.push({
      id: newId,
      name: this.newUser.name!,
      email: this.newUser.email!
    });

    this.newUser = {};

    const modal = document.getElementById('addModal');
    if (modal) {
      const modalInstance = (window as any).bootstrap.Modal.getInstance(modal);
      modalInstance.hide();
    }
  }

  deleteUser(id: number): void {
    this.users = this.users.filter(user => user.id !== id);
  }

  openEditModal(user: User): void {
    this.editUserId = user.id;
    this.editUser = { ...user };

    const modal = document.getElementById('editModal');
    if (modal) {
      const modalInstance = new (window as any).bootstrap.Modal(modal);
      modalInstance.show();
    }
  }

  saveEdit(): void {
    if (!this.editUser.name || !this.editUser.email) {
      alert('Name and Email are required.');
      return;
    }

    this.users = this.users.map(user =>
      user.id === this.editUserId ? { ...user, ...this.editUser } : user
    );

    this.editUserId = null;
    this.editUser = {};

    const modal = document.getElementById('editModal');
    if (modal) {
      const modalInstance = (window as any).bootstrap.Modal.getInstance(modal);
      modalInstance.hide();
    }
  }
}
