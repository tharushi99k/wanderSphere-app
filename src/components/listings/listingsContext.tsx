"use client";

import { addListing, deleteListing, getListings, Listing, updateListing } from "@/data/data";
import { DeleteIcon, EditIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";


interface FormValues {
  title: string;
  location: string;
  price: number;
}

const ListingsContext = () => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);


  const { register, handleSubmit, reset } = useForm<FormValues>();

  useEffect(() => {
    setListings(getListings());
  }, []);


  const onSubmit = (data: FormValues) => {
    const newListing = { id: String(Date.now()), ...data };
    if (editingId) {
      updateListing(editingId, { ...newListing, id: editingId });
    } else {
      addListing(newListing);
    }
    reset();
    setEditingId(null);
    setListings(getListings());
  };


  const handleEdit = (id: string) => {
    const listingToEdit = listings.find((listing) => listing.id === id);
    if (listingToEdit) {
      setEditingId(id);
      reset({
        title: listingToEdit.title,
        location: listingToEdit.location,
        price: listingToEdit.price,
      });
    }
  };

  const handleDelete = (id: string) => {
    deleteListing(id);
    setListings(getListings());
  };

  return (
    <div className="flex flex-col items-start justify-center w-full px-4 py-5 gap-8 mt-32">
      <h1 className="text-2xl font-bold mb-4">Manage Listings</h1>

   
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-4 shadow-md rounded-lg mb-4"
      >
        <input
          {...register("title")}
          placeholder="Title"
          className="border p-2 w-full mb-2"
          required
        />
        <input
          {...register("location")}
          placeholder="Location"
          className="border p-2 w-full mb-2"
          required
        />
        <input
          {...register("price")}
          type="number"
          placeholder="Price"
          className="border p-2 w-full mb-2"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {editingId ? "Update Listing" : "Add Listing"}
        </button>
      </form>

      {/* Listings Table */}
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Title</th>
            <th className="border p-2">Location</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {listings.map((listing) => (
            <tr key={listing.id} className="border">
              <td className="border p-2">{listing.title}</td>
              <td className="border p-2">{listing.location}</td>
              <td className="border p-2">${listing.price}</td>
              <td className="border p-2">
              <button
                  onClick={() => handleEdit(listing.id)}
                  className="text-blue-500 hover:text-blue-700 mr-4 "
                >
                  <EditIcon width={20} height={20} />
                </button>
                <button
                  onClick={() => handleDelete(listing.id)}
                  className="text-red-500 hover:text-red-700 ml-4 "
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

export default ListingsContext;
