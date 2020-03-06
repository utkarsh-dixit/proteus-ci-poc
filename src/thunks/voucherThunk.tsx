import { getApiBaseUrl } from '../util/urlUtils';
import Voucher from '../models/voucher/voucher';
import { ReservationState, TicketType } from '../constants/voucherConstants';

export const getVoucherDetailsFor = (publicItineraryId: string) => {
    return new Voucher({
        ticketType: TicketType.MOBILE_TICKET,
        reservationState: ReservationState.CONFIRMED,


    })
}
