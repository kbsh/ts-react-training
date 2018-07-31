import { math } from '../ts-training/math';

it('加算', () => {
    const calculator = new math.Calculator();

    expect(calculator.sum(1, 2)).toBe(3);
});