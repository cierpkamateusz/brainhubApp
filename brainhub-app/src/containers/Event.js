import * as Yup from "yup";
import axios from "axios";
import EVENTS_URL from "../routesBE";

export const createEvent = (eventValues) => {
  return axios.post(EVENTS_URL, eventValues);
};

export const getAllEvents = () => {
  return axios.get(EVENTS_URL);
};

export const eventSchema = Yup.object().shape({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  email: Yup.string().email().required(),
  date: Yup.date().required(),
});
