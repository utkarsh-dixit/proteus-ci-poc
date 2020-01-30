import UrlUtils from "../util/Network/urlUtils"

export default class HelpThunk {
    static doesBookingWithEmailAndIDExist = async (bookingId, bookingEmail, completion) => {
        url = `${UrlUtils.getApiBaseUrl()}/api/v5/booking/${bookingId}?emailId=${bookingEmail}`
        const options = {
            method: 'HEAD'
        }
        console.log(`Fetching ${url}`);
        response = await fetch(url, options)
        const resCode = response.status;
        console.log(resCode);
            if (resCode === 200) {
                completion(true)
            } else {
                completion(false)
            }
    }
}