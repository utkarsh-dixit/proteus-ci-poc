class UrlUtils {
  /**
   * Returns internal host for server-side calls, else the public endpoint
   * Uses environment variables API_HOST_INTERNAL and API_HOST,
   *
   * @returns string - The api server location
   */
  static getApiBaseUrl() {
    return 'https://www.test-headout.com/';
  }
}

export default UrlUtils;
