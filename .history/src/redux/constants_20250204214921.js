export const options = {
  method: "GET",
  url: "https://text-translator2.p.rapidapi.com/getLanguages",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
    "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
  },
};
