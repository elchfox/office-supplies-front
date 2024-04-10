import config from "../utils/config";

const get = async (endpoint: string, params: any = {}) => {
  let query = Object.entries(params)
    .filter(([, value]: any) => value && value.toString().length > 0)
    .map((param) => `${param[0]}=${param[1]}`)
    .join("&");
  const requestOptions: any = {
    method: "GET",
    headers: headers(),
  };
  const URL = `${config.baseUrl}/${endpoint}?${query}`.replace("??", "?");
  console.log(URL)
  const res = await fetch(URL, requestOptions);
  const data = await res.json();
  return data;
};

const post = async (endpoint: string, data: any) => {
  const requestOptions: any = {
    method: "POST",
    headers: headers(),
    body: JSON.stringify(data),
  };

  const res = await fetch(`${config.baseUrl}/${endpoint}`, requestOptions);

  return await res.json();
};

const update = async (endpoint: string, data: any) => {
  const requestOptions: any = {
    method: "PUT",
    headers: headers(),
    body: JSON.stringify(data),
  };
  const res = await fetch(`${config.baseUrl}/${endpoint}`, requestOptions);
  console.log(res,"jjjjjjjjj")
  return await res.json();
};
const remove = async (endpoint: string) => {
  const requestOptions: any = {
    method: "DELETE",
    headers: headers(),
  };
  const res = await fetch(`${config.baseUrl}/${endpoint}`, requestOptions);

  return await res.json();
};

export const headers = () => {
  const OcpApimSubscriptionKey = process.env.REACT_APP_PROD
    ? "4b0d355121fe4e0bb3d86e902efe9f20"
    : "5c088fe8bc3a46478fe01eff4a563fec";

  // return authorization header with basic auth credentials
  //let user = JSON.parse(sessionStorage.getItem("railUser"));
  const userJson: any = localStorage.getItem("user");
  const user = JSON.parse(userJson);
  if (user) {
    return {
      Authorization: "Bearer " + user.token,
      accept: "text/plain",
      "Content-Type": "application/json",
      // "Ocp-Apim-Subscription-Key": `${OcpApimSubscriptionKey}`,
    };
  } else {
    return { Accept: "application/json", "Content-Type": "application/json" };
  }
};

const api = {
  get,
  post,
  update,
  remove,
};
export default api;
