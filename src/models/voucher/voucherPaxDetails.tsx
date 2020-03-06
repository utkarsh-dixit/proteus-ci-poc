import { Record } from 'immutable';
import VoucherPaxBreakup from './voucherPaxBreakup';

export default class VoucherPaxDetails extends Record<{
    primaryCustomerName: string;
    paxBreakup: Array<VoucherPaxBreakup>;
}>({
    primaryCustomerName: '',
    paxBreakup: new Array<VoucherPaxBreakup>()
}) { }
