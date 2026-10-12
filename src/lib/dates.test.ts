import { describe, expect, it } from 'vitest';
import { formatDate, toDateTimeAttr } from './dates';

describe('dates', () => {
	it('formats dates in pt-BR long form', () => {
		expect(formatDate(new Date('2025-10-01T12:00:00Z'))).toMatch(/outubro/i);
		expect(formatDate(new Date('2025-10-01T12:00:00Z'))).toContain('2025');
	});

	it('returns YYYY-MM-DD for datetime attributes', () => {
		expect(toDateTimeAttr(new Date('2025-10-01T15:30:00Z'))).toBe('2025-10-01');
	});
});
