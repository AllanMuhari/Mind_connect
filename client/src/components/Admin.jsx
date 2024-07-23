import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Admin = () => {
  const [counselors, setCounselors] = useState([]);

  useEffect(() => {
    const fetchCounselors = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/counselors/pending"
        );
        setCounselors(response.data);
      } catch (error) {
        console.error("Error fetching pending counselors", error);
        toast.error("Failed to fetch pending counselors.");
      }
    };

    fetchCounselors();
  }, []);

  const approveCounselor = async (id) => {
    try {
      await axios.put(`http://localhost:5000/api/counselors/approve/${id}`);
      setCounselors(counselors.filter((counselor) => counselor.id !== id));
      toast.success("Counselor approved successfully!");
    } catch (error) {
      console.error("Error approving counselor", error);
      toast.error("Error approving counselor. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-4xl mt-8">
        <h2 className="text-2xl mb-4">Approve Counselors</h2>
        {counselors.length > 0 ? (
          <ul className="space-y-4">
            {counselors.map((counselor) => (
              <li
                key={counselor.id}
                className="flex justify-between items-center p-4 bg-gray-50 rounded shadow">
                <span>
                  {counselor.username} - {counselor.email}
                </span>
                <button
                  onClick={() => approveCounselor(counselor.id)}
                  className="bg-blue-500 text-white px-4 py-2 rounded">
                  Approve
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No counselors awaiting approval.</p>
        )}
      </div>
    </div>
  );
};

export default Admin;
