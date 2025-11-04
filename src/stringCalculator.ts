export function stringCalculator(input: string): number {
  // Handle empty input
  if (input.trim() === '') return 0;

  // Split by comma or newline
  const parts = input.split(/[,\n]/).map(s => s.trim()).filter(Boolean);

  const nums: number[] = [];

  for (const part of parts) {
    const n = Number(part);

    if (Number.isNaN(n)) {
      throw new Error(`"${part}" is not a valid number`);
    }

    if (n < 0) {
      throw new Error('Negatives not allowed');
    }

    nums.push(n);
  }

  // Return sum
  return nums.reduce((a, b) => a + b, 0);
}