import axios from "axios";

export function objToQueryString(obj) {
	const keyValuePairs = [];
	for (const key in obj) {
		keyValuePairs.push(
			encodeURIComponent(key) + "=" + encodeURIComponent(obj[key])
		);
	}
	return keyValuePairs.join("&");
}

export function requestData(url, paramObject, method) {
	return axios.request({
		url: url + objToQueryString(paramObject),
		method: method,
		headers: {
			Pragma: "no-cache"
		}
	})
	.then(response => {
		return response;
	})
	.catch(error => {
		return error;
	});
} 