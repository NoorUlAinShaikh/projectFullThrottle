import axios from "axios";
import _ from "lodash";
import { FETCH_USER_S } from "./types";

//fetch all users
export const fetchUser_s = (id = null) => async (dispatch) => {
  const response = await axios.get(`/api/members${id ? `?id=${id}` : ""}`);
  //data on our json server is stored in as array of objects
  //mapkeys helps turn it into key-value pair
  //where the key id the id of the user and the entire object beomes the value
  //used this for ease of referencing data in the client application
  dispatch({ type: FETCH_USER_S, payload: _.mapKeys(response.data, "id") });
};
