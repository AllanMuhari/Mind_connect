import create from "zustand";
import axios from "axios";

export const useSessionStore = create((set) => ({
  sessions: [],
  fetchSessions: async (counsellorId) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/sessions/counsellor/${counsellorId}`
      );
      set({ sessions: response.data });
    } catch (error) {
      console.error("Failed to fetch sessions", error);
    }
  },
}));
