import { Record } from 'immutable';
import VoucherBookingDetails from './voucherBookingDetails';
import VoucherVendorDetails from './voucherVendorDetails';
import VoucherPaxDetails from './voucherPaxDetails';
import { ReseravationState, TicketType } from '../../constants/voucherConstants';

export default class Voucher extends Record<{
    ticketType: TicketType;
    reservationState: ReseravationState;
    tourName: string;
    variantName: string;
    tourGroupId: number;
    bookingId: number;
    bookingDetails: VoucherBookingDetails;
    vendorDetails: VoucherVendorDetails;
    paxDetails: VoucherPaxDetails;
    tickets: Array<{ imageUrl: string }>;
}>({
    ticketType: TicketType.MOBILE_TICKET,
    reservationState: ReseravationState.CONFIRMED,
    tourName: '',
    variantName: '',
    tourGroupId: 0,
    bookingId: 0,
    bookingDetails: new VoucherBookingDetails(),
    vendorDetails: new VoucherVendorDetails(),
    paxDetails: new VoucherPaxDetails(),
    tickets: Array<{ imageUrl: string }>()
}) { }
