"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { DeleteIcon, EditIcon } from "lucide-react"; 

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

const UsersContext = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);

  const { register, handleSubmit, reset } = useForm<User>();

  useEffect(() => {
    const fetchedUsers = [
      { id: "1", name: "Alice Johnson", email: "alice@example.com", role: "Admin" },
      { id: "2", name: "Bob Smith", email: "bob@example.com", role: "User" },
    ];
    setUsers(fetchedUsers);
  }, []);

  const onSubmit = (data: User) => {
    if (editingId) {
      setUsers((prev) =>
        prev.map((user) =>
          user.id === editingId ? { ...user, ...data } : user
        )
      );
    } else {
      setUsers((prev) => [
        ...prev,
        { ...data, id: String(Date.now()) },
      ]);
    }
    reset();
    setEditingId(null);
  };

  const handleEdit = (id: string) => {
    const userToEdit = users.find((user) => user.id === id);
    if (userToEdit) {
      setEditingId(id);
      reset(userToEdit);
    }
  };

  const handleDelete = (id: string) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  return (
    <div className="flex flex-col items-start justify-center w-full px-4 py-5 gap-8 mt-32">
      <h1 className="text-2xl font-bold mb-4">Manage Users</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-4 shadow-md rounded-lg mb-4"
      >
        <input
          {...register("name")}
          placeholder="Name"
          className="border p-2 w-full mb-2"
          required
        />
        <input
          {...register("email")}
          type="email"
          placeholder="Email"
          className="border p-2 w-full mb-2"
          required
        />
        <input
          {...register("role")}
          placeholder="Role"
          className="border p-2 w-full mb-2"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {editingId ? "Update User" : "Add User"}
        </button>
      </form>

      {/* Users Table */}
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Role</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border">
              <td className="border p-2">{user.name}</td>
              <td className="border p-2">{user.email}</td>
              <td className="border p-2">{user.role}</td>
              <td className="border p-2 flex items-center gap-4">
                {/* Edit Icon */}
                <button
                  onClick={() => handleEdit(user.id)}
                  className="text-blue-500 hover:text-blue-700"
                >
                  <EditIcon width={20} height={20} />
                </button>
                {/* Delete Icon */}
                <button
                  onClick={() => handleDelete(user.id)}
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

export default UsersContext;
