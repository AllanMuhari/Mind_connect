import React, { useEffect, useState } from "react";
import axios from "axios";
import { useUserStore } from "../store/userStore";

const BookedSessions = () => {
  const user = useUserStore((state) => state.user);
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const fetchSessions = async () => {
      const response = await axios.get(
        `/api/counselors/${user.id}/booked-sessions`
      );
      setSessions(response.data);
    };

    fetchSessions();
  }, [user.id]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Booked Sessions</h1>
      <ul>
        {sessions.map((session) => (
          <li key={session.id} className="mb-2 p-2 border rounded">
            <p>
              <strong>User:</strong> {session.user.username}
            </p>
            <p>
              <strong>Date:</strong>{" "}
              {new Date(session.sessionDate).toLocaleString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookedSessions;
