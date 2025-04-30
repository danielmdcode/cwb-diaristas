/**
 * Formats a number into Brazilian Real (BRL) currency format
 * @param value - The number to be formatted
 * @returns The formatted currency string (e.g., "R$ 1.234,56")
 */
export const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(value);
}; 