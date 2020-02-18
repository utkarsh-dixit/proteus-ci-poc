import { BASE_API_URL } from "../../config/index";
class UrlUtils {
    /**
     * Returns internal host for server-side calls, else the public endpoint
     * Uses environment variables API_HOST_INTERNAL and API_HOST,
     *
     * @returns string - The api server location
     */
    static getApiBaseUrl() {
        return BASE_API_URL;
    }
}

export default UrlUtils;
