import axios from "axios";
export const request=axios.create({
	baseURL:"http://42.192.180.126:9000/"
})