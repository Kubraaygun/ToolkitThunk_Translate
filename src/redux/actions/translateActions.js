//Thunk Aksiyonu

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { options } from "../constants";

export const getLanguages = createAsyncThunk(
  "translate/getLanguages",
  async () => {
    //Api'dan dil verilerini al
    const res = await axios.request(options);

    //Aksiyonun payload'i olacak veriyi return etme

    return res.data.data.languages;
  }
);
