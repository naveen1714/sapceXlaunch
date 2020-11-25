import axios from "axios";
import API_URL from "../constants";

export const makeUrl = ({ launch_success, land_success, launch_year }) => {
  let url = API_URL.FETCH_SPACEX_DATA;

  if (launch_success != undefined) {
    url += "&launch_success=" + launch_success;
  }

  if (land_success != undefined) {
    url += "&land_success=" + land_success;
  }

  if (launch_year != undefined) {
    url += "&launch_year=" + launch_year;
  }

  return url;
};

export const fetchSpacePrograms = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .get(makeUrl(data))
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        console.error(error);
        reject([]);
      });
  });
};
