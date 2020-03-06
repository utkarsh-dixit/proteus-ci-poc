import { Record } from 'immutable';

export default class VoucherVendorDetails extends Record<{
    name: string;
    phoneNumber?: string;
    imageUrl?: string;
}>({
    name: '',
    phoneNumber: undefined,
    imageUrl: undefined
}) { }
