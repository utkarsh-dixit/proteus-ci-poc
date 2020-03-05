
export default class Voucher {
    ticketType: 'mTicket' | 'printTicket';
    reservationState: 'confirmed' | 'cancelled';
    tourName: string;
    variantName: string;
    tourGroupID: number;
    bookingID: number;
    bookingDetails: {
        bookingType: 'FIXED_START_TIME_FIXED_DURATION' | 'FIXED_START_TIME_FLEXIBLE_DURATION'
        | 'FLEXIBLE_START_TIME_FIXED_DURATION' | 'FLEXIBLE_START_TIME_FLEXIBLE_DURATION';
        date: string;
        duration?: string;
        startTime: string;
        endTime: string;
        validUpto?: string;
    }
    vendorDetails: {
        name: string;
        phoneNumber?: string;
        imageUrl?: string;
    }
    paxDetails: {
        primaryCustomerName: string;
        paxBreakup: Array<{ displayName: string; count: number }>;
    };
    tickets: Array<{ imageUrl: string }>;
}

