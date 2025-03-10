"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { DeleteIcon, EditIcon } from "lucide-react"; 

interface Reservation {
  id: string;
  guestName: string;
  reservationDate: string;
  totalAmount: number;
}

const ReservationsContext = () => {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);

  const { register, handleSubmit, reset } = useForm<Reservation>();


  useEffect(() => {
    const fetchedReservations = [
      { id: "1", guestName: "John Doe", reservationDate: "2024-03-10", totalAmount: 250 },
      { id: "2", guestName: "Jane Smith", reservationDate: "2024-03-12", totalAmount: 320 },
    ];
    setReservations(fetchedReservations);
  }, []);

  const onSubmit = (data: Reservation) => {
    if (editingId) {
      setReservations((prev) =>
        prev.map((reservation) =>
          reservation.id === editingId ? { ...reservation, ...data } : reservation
        )
      );
    } else {
      setReservations((prev) => [
        ...prev,
        { ...data, id: String(Date.now()) },
      ]);
    }
    reset();
    setEditingId(null);
  };

  const handleEdit = (id: string) => {
    const reservationToEdit = reservations.find((reservation) => reservation.id === id);
    if (reservationToEdit) {
      setEditingId(id);
      reset(reservationToEdit);
    }
  };

  const handleDelete = (id: string) => {
    setReservations((prev) => prev.filter((reservation) => reservation.id !== id));
  };

  return (
    <div className="flex flex-col items-start justify-center w-full px-4 py-5 gap-8 mt-32">
      <h1 className="text-2xl font-bold mb-4">Manage Reservations</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-4 shadow-md rounded-lg mb-4"
      >
        <input
          {...register("guestName")}
          placeholder="Guest Name"
          className="border p-2 w-full mb-2"
          required
        />
        <input
          {...register("reservationDate")}
          type="date"
          className="border p-2 w-full mb-2"
          required
        />
        <input
          {...register("totalAmount")}
          type="number"
          placeholder="Total Amount"
          className="border p-2 w-full mb-2"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {editingId ? "Update Reservation" : "Add Reservation"}
        </button>
      </form>

      {/* Reservations Table */}
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Guest Name</th>
            <th className="border p-2">Reservation Date</th>
            <th className="border p-2">Total Amount</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation) => (
            <tr key={reservation.id} className="border">
              <td className="border p-2">{reservation.guestName}</td>
              <td className="border p-2">{reservation.reservationDate}</td>
              <td className="border p-2">${reservation.totalAmount}</td>
              <td className="border p-2 flex items-center gap-4">
                {/* Edit Icon */}
                <button
                  onClick={() => handleEdit(reservation.id)}
                  className="text-blue-500 hover:text-blue-700"
                >
                  <EditIcon width={20} height={20} />
                </button>
                {/* Delete Icon */}
                <button
                  onClick={() => handleDelete(reservation.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <DeleteIcon width={20} height={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReservationsContext;
