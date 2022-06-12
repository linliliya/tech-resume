import axios from "axios";

export const sendEmail = (data) => {
  let api_url =
    "";

  console.log(data);
  const config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };

  return axios
    .post(api_url, data, config)
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((error) => {
      console.log(error.response);
    });
};

export const notify = (data) => {
  let api_url =
    "";

  console.log(data);
  const config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };

  return axios
    .post(api_url, data, config)
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((error) => {
      console.log(error.response);
    });
};
