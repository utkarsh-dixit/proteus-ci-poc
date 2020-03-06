import { Record } from 'immutable';

export default class VoucherPaxBreakup extends Record<{
    displayName: string;
    count: number;
}>({
    displayName: '',
    count: 0
}) { }
