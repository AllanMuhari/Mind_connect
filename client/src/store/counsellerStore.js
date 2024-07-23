import create from "zustand";
import axios from "axios";

export const useCounsellorStore = create((set) => ({
  counsellors: [],
  fetchCounsellors: async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/counsellors");
      set({ counsellors: response.data });
    } catch (error) {
      console.error("Failed to fetch counsellors", error);
    }
  },
}));
