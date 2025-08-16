import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule, NgClass, FormsModule],
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {
  selectedFilter = 'all';

  rooms = [
    { number: '101', type: 'single', capacity: '1 Student', amenities: 'Wi-Fi, Study Table, Attached Bathroom', status: 'Available', image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSWYXkZ1YovmSxKtmfz4CT5LtraF2e3KIJze9oJCwBsVidCZHE1Rc84lTm4-14f7h0wdrAYjQfGKDL_ovvq6QYEH4c43vNIxurTPS84vZsSm0XHjea9cU-Y' },
    { number: '102', type: 'double', capacity: '2 Students', amenities: 'Air Conditioning, Wi-Fi, Private Washroom', status: 'Available', image: 'https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg' },
    { number: '103', type: 'double', capacity: '2 Students', amenities: 'Air Conditioning, Wi-Fi, Private Washroom', status: 'Occupied', image: 'https://www.shutterstock.com/image-photo/interior-double-bed-hotel-room-260nw-310855142.jpg' },
    { number: '104', type: 'single', capacity: '1 Student', amenities: 'Air Conditioning, Wi-Fi, Private Washroom', status: 'Occupied', image: 'https://i.pinimg.com/736x/6a/e5/1e/6ae51e7d0eb2c9a90f43396c845ec8a7.jpg' },
    { number: '105', type: 'double', capacity: '2 Students', amenities: 'Air Conditioning, Wi-Fi, Private Washroom', status: 'Occupied', image: 'https://www.residenthotels.com/wp-content/uploads/2022/06/The-Resident-Victoria-double-room-1400x928.jpg' },
    { number: '106', type: 'family', capacity: 'Family', amenities: 'Air Conditioning, Wi-Fi, Private Washroom', status: 'Available', image: 'https://assets.langhamhotels.com/is/image/langhamhotelsstage/tlbos-family-room-double:Medium?wid=675&hei=380' },
    { number: '107', type: 'family', capacity: 'Family', amenities: 'Air Conditioning, Wi-Fi, Private Washroom', status: 'Occupied', image: 'https://i.pinimg.com/474x/e8/c5/0c/e8c50ce285b0a5730a23db4e1459cd3b.jpg' },
    { number: '108', type: 'double', capacity: '2 Students', amenities: 'Air Conditioning, Wi-Fi, Private Washroom', status: 'Available', image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/675241697.jpg?k=ca7a788881b7c0b133e802b07873368db256493778e422b5a5d32dd9203cf9fa&o=&hp=1' },
    { number: '109', type: 'double', capacity: '2 Students', amenities: 'Air Conditioning, Wi-Fi, Private Washroom', status: 'Occupied', image: 'https://mylomehotels.com/wp-content/uploads/2023/04/aile-oda-3-1024px.webp' },
    { number: '110', type: 'family', capacity: 'Family', amenities: 'Air Conditioning, Wi-Fi, Private Washroom', status: 'Available', image: 'https://www.riversideparkhotel.com/wp-content/uploads/2022/02/Photo-001-960x540-fp_mm-fpoff_0_0.jpg' },
    { number: '111', type: 'double', capacity: '2 Students', amenities: 'Air Conditioning, Wi-Fi, Private Washroom', status: 'Occupied', image: 'https://www.hno.co.jp/stay/img/deluxe-family/p-deluxe-family-2A-L.jpg' },
    { number: '112', type: 'double', capacity: '2 Students', amenities: 'Air Conditioning, Wi-Fi, Private Washroom', status: 'Available', image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/566133774.jpg?k=9d098cbafa81b7bb188fcadb2778a81ce59f1686d461da455b2c2ea9f21dbcf6&o=&hp=1' },
    { number: '113', type: 'double', capacity: '2 Students', amenities: 'Air Conditioning, Wi-Fi, Private Washroom', status: 'Occupied', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlYaanCoxV-5O6DNS8ieMQOZLyt4qD5Xq8AA&s' },
    { number: '114', type: 'double', capacity: '2 Students', amenities: 'Air Conditioning, Wi-Fi, Private Washroom', status: 'Available', image: 'https://newhotelsuhail.com/images/uploads/54/1678946902StudioKingDouble1.JPG' },
    { number: '115', type: 'double', capacity: '2 Students', amenities: 'Air Conditioning, Wi-Fi, Private Washroom', status: 'Occupied', image: 'https://media.istockphoto.com/id/509489657/photo/twin-hotel-room-interior.jpg?s=612x612&w=0&k=20&c=U8Ehakhb-2mSzcGRPbH7zDTkRZcnhh4t_36PgnGiuoM=' },
    { number: '116', type: 'double', capacity: '2 Students', amenities: 'Air Conditioning, Wi-Fi, Private Washroom', status: 'Available', image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/f2/84/b1/suite-200.jpg?w=700&h=-1&s=1' },
    { number: '117', type: 'family', capacity: 'Family', amenities: 'Air Conditioning, Wi-Fi, Private Washroom', status: 'Occupied', image: 'https://pix10.agoda.net/hotelImages/4345918/462008158/841e6e60bad2d63f8009fc0c8bf23c22.jpg?ca=24&ce=0&s=414x232' },
    { number: '118', type: 'single', capacity: '1 Student', amenities: 'Wi-Fi, Study Table, Attached Bathroom', status: 'Available', image: 'https://www.tridenthotels.com/-/media/trident-hotel/trident-hyderabad/Room--Suites/room-detail/Deluxe-Room-with-City-View/Deluxe-Room-City-View-TTHY-1920x1080-desktop.jpg' },
    { number: '119', type: 'Family', capacity: 'Family', amenities: 'Wi-Fi, Study Table, Attached Bathroom', status: 'Available', image: 'https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/flyfish/raw/NH76209247237910/QS1042/QS1042-Q1/grand-mercure-singapore-roxy-sg-clean_163091277743.jpg' },
    { number: '120', type: 'double', capacity: '2 Students', amenities: 'Wi-Fi, Study Table, Attached Bathroom', status: 'Available', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKVKyCjsd5gWEkA9AEAiwh2CdUHwwZLisZkg&s' },
    { number: '121', type: 'Family', capacity: 'Family', amenities: 'Wi-Fi, Study Table, Attached Bathroom', status: 'Available', image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/509427344.jpg?k=043a522837886f3e9f1d49036226e9fb25a38643501f926b4399bbe495726c50&o=&hp=1' }
  ];

  filterRooms(type: string) {
    this.selectedFilter = type;
  }

  isVisible(room: any): boolean {
    if (this.selectedFilter === 'all') return true;
    return room.type.toLowerCase() === this.selectedFilter;
  }

  bookRoom(room: any) {
    if (room.status.toLowerCase() === 'available') {
      const confirmBooking = confirm(`Do you want to book Room ${room.number}?`);
      if (confirmBooking) {
        room.status = 'Occupied';
        alert(`Room ${room.number} booked successfully.`);
      }
    }
  }
  

  vacateRoom(room: any) {
    const confirmVacate = confirm(`Vacate Room ${room.number}?`);
    if (confirmVacate) {
      room.status = 'Available';
      alert(`Room ${room.number} is now available.`);
    }
  }
}

