import axios from "axios";

const apiUrl = "http://localhost:8877/emp/";

export const postRequest = async (url, body) => {
  try {
    let { data } = await axios.post(apiUrl + url, body);
    if (data.code === 200) {
      return data.data;
    } else {
      return alert(data.message);
    }
  } catch (e) {
    return alert(e.message);
  }
};
