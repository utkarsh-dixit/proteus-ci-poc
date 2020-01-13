import {API_BASE_URL} from "../../config.js";

class UrlUtils {
	/**
	 * Returns internal host for server-side calls, else the public endpoint
	 * Uses environment variables API_HOST_INTERNAL and API_HOST,
	 *
	 * @returns string - The api server location
	 */
	static getApiBaseUrl() {
		return API_BASE_URL;
	}
}

export default UrlUtils;
