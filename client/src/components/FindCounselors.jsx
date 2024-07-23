import React, { useEffect, useState } from "react";
import axios from "axios";
import { useUserStore } from "../store/userStore";

const FindCounselors = () => {
  const [counselors, setCounselors] = useState([]);
  const user = useUserStore((state) => state.user);

  useEffect(() => {
    const fetchCounselors = async () => {
      const response = await axios.get("/api/counselors");
      setCounselors(response.data);
    };

    fetchCounselors();
  }, []);

  const bookSession = async (counselorId) => {
    const response = await axios.post("/api/book-session", {
      userId: user.id,
      counselorId,
    });
    if (response.status === 201) {
      alert("Session booked successfully");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Find Therapists</h1>
      <ul>
        {counselors.map((counselor) => (
          <li key={counselor.id} className="mb-2 p-2 border rounded">
            <p>
              <strong>Name:</strong> {counselor.user.username}
            </p>
            <button onClick={() => bookSession(counselor.id)} className="btn">
              Book Session
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FindCounselors;
