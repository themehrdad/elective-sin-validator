export function validateSin(sin: string) {
  if (!validateLength(sin)) {
    return { valid: false, reason: "SIN must be 9 digits long" };
  }

  if (!validateDigits(sin)) {
    return { valid: false, reason: "SIN must contain only digits" };
  }

  if (!validateLuhn(sin)) {
    return { valid: false, reason: "Invalid SIN" };
  }

  return { valid: true, reason: "" };
}

function validateLength(sin: string) {
  return sin.length === 9;
}

function validateDigits(sin: string) {
  return sin.match(/^\d+$/) !== null;
}

function validateLuhn(sin: string) {
  const digits = sin.split("").map(Number);
  const secondDigitsDoubled = digits.map((d, i) => {
    if (i % 2 === 0) {
      return d;
    }
    const doubled = d * 2;
    if (doubled > 9) {
      return doubled - 9;
    }
    return doubled;
  });

  const sum = secondDigitsDoubled.reduce((acc, d) => acc + d, 0);
  return sum % 10 === 0;
}
