export const useStrength = (options: any) => {
  let count = 0;
  for (const key in options) {
    if (options[key] === false) {
      count += 1;
    }
  }
  return count;
};
