const longDate = new Intl.DateTimeFormat('pt-BR', {
	day: 'numeric',
	month: 'long',
	year: 'numeric',
	timeZone: 'UTC',
});

export function formatDate(date: Date): string {
	return longDate.format(date);
}

export function toDateTimeAttr(date: Date): string {
	return date.toISOString().slice(0, 10);
}
