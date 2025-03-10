export interface Listing {
    id: string;
    title: string;
    location: string;
    price: number;
  }
  
 
  export let listings: Listing[] = [
    { id: "1", title: "Villa in Bali", location: "Bali, Indonesia", price: 1200 },
    { id: "2", title: "Beach House", location: "Malibu, USA", price: 2500 },
    { id: "3", title: "Mountain Lodge", location: "Swiss Alps", price: 1500 },
  ];
  
  // CRUD Operations
  export const getListings = () => {
    return listings;
  };
  
  export const addListing = (newListing: Listing) => {
    listings.push(newListing);
  };
  
  export const updateListing = (id: string, updatedListing: Listing) => {
    const index = listings.findIndex((listing) => listing.id === id);
    if (index !== -1) {
      listings[index] = updatedListing;
    }
  };
  
  export const deleteListing = (id: string) => {
    listings = listings.filter((listing) => listing.id !== id);
  };


//   reservation page

export interface Reservation {
    id: string;
    guestName: string;
    reservationDate: string;
    totalAmount: number;
  }
  
  // Sample data
  let reservations: Reservation[] = [
    { id: "1", guestName: "John Doe", reservationDate: "2024-03-10", totalAmount: 250 },
    { id: "2", guestName: "Jane Smith", reservationDate: "2024-03-12", totalAmount: 320 },
    { id: "3", guestName: "Michael Johnson", reservationDate: "2024-03-15", totalAmount: 500 },
  ];
  

  export const getReservations = (): Reservation[] => {
    return reservations;
  };
  
  // Add 
  export const addReservation = (reservation: Reservation): void => {
    reservations.push(reservation);
  };
  
  // Update 
  export const updateReservation = (id: string, updatedReservation: Reservation): void => {
    reservations = reservations.map((reservation) =>
      reservation.id === id ? { ...reservation, ...updatedReservation } : reservation
    );
  };
  
  // Delete 
  export const deleteReservation = (id: string): void => {
    reservations = reservations.filter((reservation) => reservation.id !== id);
  };

//   User
  

export interface User {
    id: string;
    name: string;
    email: string;
    role: string;
  }
  

  let users: User[] = [
    { id: "1", name: "Alice Johnson", email: "alice@example.com", role: "Admin" },
    { id: "2", name: "Bob Smith", email: "bob@example.com", role: "User" },
    { id: "3", name: "Charlie Brown", email: "charlie@example.com", role: "User" },
  ];
  

  export const getUsers = (): User[] => {
    return users;
  };
  

  export const addUser = (user: User) => {
    users.push(user);
  };
  
  
  export const updateUser = (id: string, updatedUser: User) => {
    users = users.map(user => user.id === id ? updatedUser : user);
  };
 
  export const deleteUser = (id: string) => {
    users = users.filter(user => user.id !== id);
  };
  