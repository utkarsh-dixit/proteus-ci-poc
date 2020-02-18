import UrlUtils from "../util/Network/urlUtils"

export default class HelpThunk {
    static doesBookingWithEmailAndIDExist = async (bookingId, bookingEmail, completion) => {
        console.log(UrlUtils.getApiBaseUrl());
        url = `${UrlUtils.getApiBaseUrl()}/api/v5/booking/${bookingId}?emailId=${bookingEmail}`
        const options = {
            method: 'HEAD'
        }
        response = await fetch(url, options)
        const resCode = response.status;
        if (resCode === 200) {
            completion(true)
        } else {
            completion(false)
        }
    }
}