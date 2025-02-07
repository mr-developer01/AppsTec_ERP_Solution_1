export const usePasswordGenerator = (
  length: number,
  option: any
): string | number => {
  let allChars = "";
  let password = "";

  if (length < 6) {
    return "Password must be at least 6 characters";
  }

  if (
    !option.upperCase &&
    !option.lowerCase &&
    !option.nums &&
    !option.symbols
  ) {
    alert("Check atleast one option!!");
    return "Check atleast one option!!";
  }

  if (option.upperCase) {
    allChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (option.lowerCase) {
    allChars += "abcdefghijklmnopqrstuvwxyz";
  }
  if (option.nums) {
    allChars += "0123456789";
  }
  if (option.symbols) {
    allChars += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
  }

  for (let i = 0; i < length; i++) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  return password;
};
