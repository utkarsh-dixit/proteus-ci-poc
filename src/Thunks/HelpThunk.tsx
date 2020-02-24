import { getApiBaseUrl } from '../util/urlUtils'

export const doesBookingWithEmailAndIDExist = async (bookingId: string, bookingEmail: string): Promise<boolean> => {
    const url = `${getApiBaseUrl()}/api/v5/booking/${bookingId}?emailId=${bookingEmail}`;
    const options = {
        method: 'HEAD'
    };
    const response = await fetch(url, options);
    return response.status === 200;
}
