import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 88770f7f235b7e7208461a97eadb45aad3d1f759d5c642272764883495caa6cd"
  }
});
