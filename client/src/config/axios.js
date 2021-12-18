import axios from "axios";

const cliAxios = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
});

export default cliAxios;
