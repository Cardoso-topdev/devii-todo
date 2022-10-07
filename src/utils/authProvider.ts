import {
  BASE_URL,
  ROLE_ID,
  ACCESS_TOKEN,
  REFRESH_TOKEN,
  QUERY_URL,
  SCHEMA,
} from "../constants";

export const authProvider = {
  login: function ({
    login,
    password,
    tenantid,
  }: {
    login: string;
    password: string;
    tenantid: string;
  }) {
    //Initialize variables
    const formdata = new FormData();
    formdata.append("login", login);
    formdata.append("password", password);
    formdata.append("tenantid", tenantid);

    // Set any request options
    const requestOptions = new Request(BASE_URL, {
      method: "POST",
      body: formdata,
      redirect: "follow",
    });

    // Login to the ToDo Devii database
    return fetch(requestOptions)
      .then((response) => response.text())
      .then((result) => {
        const result_json = JSON.parse(result);
        const { roleid, access_token, refresh_token, schema } = result_json;
        const query_url = result_json.routes.query;
        localStorage.setItem(QUERY_URL, query_url);
        localStorage.setItem(ROLE_ID, roleid);
        localStorage.setItem(ACCESS_TOKEN, access_token);
        localStorage.setItem(REFRESH_TOKEN, refresh_token);
        localStorage.setItem(SCHEMA, JSON.stringify(schema.json.__schema));
      });
  },
  getSchema: function () {
    return localStorage.getItem(SCHEMA);
  },
  getQueryUrl: function () {
    return localStorage.getItem(QUERY_URL);
  },
  getAccessToken: function () {
    return localStorage.getItem(ACCESS_TOKEN);
  },
  getRoleID: function () {
    return localStorage.getItem(ROLE_ID);
  },
};
