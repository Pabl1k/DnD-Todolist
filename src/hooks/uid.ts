export const uid = (): string => {
  const a = Date.now().toString(16).slice(4);
  const b = Math.random().toString(16).slice(2);
  return a + b;
};
