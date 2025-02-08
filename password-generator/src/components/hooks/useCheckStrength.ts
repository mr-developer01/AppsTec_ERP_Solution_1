export const useCheckStrength = (NumberOfboxNotTick: number, generatedPass:string | number) => {
  // "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  // "abcdefghijklmnopqrstuvwxyz"
  // "0123456789"
  // "!@#$%^&*()_+~`|}{[]:;?><,./-="
  let result;

  if (NumberOfboxNotTick === 0) {
    return (result = "excellent");
  }
  if (NumberOfboxNotTick === 1) {
    return (result = "strong");
  }
  if (NumberOfboxNotTick === 2) {
    return (result = "good");
  }
  if (NumberOfboxNotTick === 3) {
    return (result = "weak");
  }
};
