import { Record } from 'immutable';
import { BookingType } from '../../constants/voucherConstants';

export default class VoucherBookingDetails extends Record<{
    bookingType: BookingType;
    date: string;
    duration?: string;
    startTime: string;
    endTime: string;
    validUpto?: string;
}>({
    bookingType: BookingType.FIXED_START_TIME_FIXED_DURATION,
    date: '',
    startTime: '',
    endTime: '',
    validUpto: undefined
}) { }
