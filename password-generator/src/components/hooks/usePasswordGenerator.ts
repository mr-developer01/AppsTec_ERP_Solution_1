export const usePasswordGenerator = (length: number): string | number => {
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  if (length < 6) {
    return "Password must be at least 6 characters";
  }

  const allChars = upperCase + lowerCase + numbers + symbols;

  let password = "";

  for (let i = 0; i < length; i++) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  return password;
};
