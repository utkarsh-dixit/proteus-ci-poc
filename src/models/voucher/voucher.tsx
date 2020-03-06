import { Record } from 'immutable';
import VoucherBookingDetails from './voucherBookingDetails';
import VoucherVendorDetails from './voucherVendorDetails';
import VoucherPaxDetails from './voucherPaxDetails';
import { ReservationState, TicketType } from '../../constants/voucherConstants';

export default class Voucher extends Record<{
    ticketType: TicketType;
    reservationState: ReservationState;
    tourName: string;
    variantName: string;
    tourGroupId: number;
    tourAddress: string;
    bookingId: number;
    bookingDetails?: VoucherBookingDetails;
    vendorDetails?: VoucherVendorDetails;
    paxDetails?: VoucherPaxDetails;
    tickets: Array<{ ticketImageUrl?: string; ticketId: string }>;
}>({
    ticketType: TicketType.MOBILE_TICKET,
    reservationState: ReservationState.CONFIRMED,
    tourName: '',
    variantName: '',
    tourAddress: '',
    tourGroupId: 0,
    bookingId: 0,
    bookingDetails: new VoucherBookingDetails(),
    vendorDetails: new VoucherVendorDetails(),
    paxDetails: new VoucherPaxDetails(),
    tickets: Array<{ ticketImageUrl?: string; ticketId: string }>()
}) { }
