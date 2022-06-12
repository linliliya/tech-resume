import axios from "axios";

export const sendEmail = (data) => {
  let api_url =
    "https://service-01p4lzv3-1257138158.sh.apigw.tencentcs.com:443/send_email";

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
    "https://service-01p4lzv3-1257138158.sh.apigw.tencentcs.com:443/notify";

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
