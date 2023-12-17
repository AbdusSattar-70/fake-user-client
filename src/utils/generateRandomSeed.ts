const LIMIT_OF_SEED: number = 10_000_000;

export const generateRandomSeed = (): number =>
  Math.ceil(Math.random() * LIMIT_OF_SEED);
