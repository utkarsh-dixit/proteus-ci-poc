import { getApiBaseUrl } from '../util/urlUtils'

export const doesBookingWithEmailAndIDExist = async (bookingId: string, bookingEmail: string, completion: (bookingExists: boolean) => void) => {
    const url = `${getApiBaseUrl()}/api/v5/booking/${bookingId}?emailId=${bookingEmail}`;
    const options = {
        method: 'HEAD'
    };
    const response = await fetch(url, options);
    completion(response.status === 200);
}
