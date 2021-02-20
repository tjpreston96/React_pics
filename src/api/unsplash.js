import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID utTmlDcVxmP8XnooUUPBk4VuFE_qzApfsVu8LvyFRX8",
  },
});
