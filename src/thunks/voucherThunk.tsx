import { getApiBaseUrl } from '../util/urlUtils';
import Voucher from '../models/voucher/voucher';
import { ReservationState, TicketType, BookingType } from '../constants/voucherConstants';
import VoucherBookingDetails from '../models/voucher/voucherBookingDetails';
import VoucherVendorDetails from '../models/voucher/voucherVendorDetails';
import VoucherPaxDetails from '../models/voucher/voucherPaxDetails';
import VoucherPaxBreakup from '../models/voucher/voucherPaxBreakup';

export const getVoucherDetailsFor = (publicItineraryId: string): Voucher => {
    return new Voucher({
        ticketType: TicketType.MOBILE_TICKET,
        reservationState: ReservationState.CONFIRMED,
        tourName: 'Eiffel Tower Summit Skip The Line Tickets with Optional Seine River Cruise',
        variantName: 'Eiffel Tower Summit Access',
        tourGroupId: 2383,
        tourAddress: '38 Avenue de la Bourdonnais, 75007 Paris, France, Paris, Île-de-France, \nFR- 75007',
        bookingId: 6787683,
        bookingDetails: new VoucherBookingDetails({
            bookingType: BookingType.FIXED_START_TIME_FIXED_DURATION,
            date: 'Aug 16, 2019',
            startTime: '05:30 PM',
            endTime: '08:00 PM'
        }),
        vendorDetails: new VoucherVendorDetails({
            name: 'HB Group',
            phoneNumber: '+33 1 84 25 58 38',
            imageUrl: 'https://i.ibb.co/GcwrdzY/vendor-image.png'
        }),
        paxDetails: new VoucherPaxDetails({
            primaryCustomerName: 'Neel Bakshi',
            paxBreakup: [new VoucherPaxBreakup({ displayName: 'Adults', count: 3 }), new VoucherPaxBreakup({ displayName: 'Child', count: 4 })]
        }),
        tickets: [{
            ticketId: '153474', ticketImageUrl: 'https://i.ibb.co/6F1cwMt/Barcode-PNG-Pic.png'
        }]
    })
}

// https://i.ibb.co/cxJB0TD/QR-Code.png
// https://i.ibb.co/bgpPbJL/Bar-Code.png
// https://i.ibb.co/6F1cwMt/Barcode-PNG-Pic.png
// https://i.ibb.co/GcwrdzY/vendor-image.png
