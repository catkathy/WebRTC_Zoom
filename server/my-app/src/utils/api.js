import axios from "axios";

// Update your React code with the server's IP address and port
const serverApi = "http://localhost:5002/api";

export const getRoomExists = async (roomId) => {
  const response = await axios.get(`${serverApi}/room-exists/${roomId}`);
  return response.data;
};
