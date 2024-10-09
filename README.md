# Elective SIN Validator

## Mehrdad Youssefi

### How to run the code

1. Clone the repository
2. Run the following command in the terminal:
```bash
npm install
```

3. Run the following command in the terminal:

```bash
npm start
```

### How to run the tests

1. Run the following command in the terminal:

```bash
npm test
```

### Assumptions

- We are running this validator at the frontend. However, this function: `lib/validate-sin.ts` can be used at the
  backend as well.
- Using Next.js as the frontend framework.
- Using React as the frontend library.
- Using TypeScript as the programming language.
- Using tailwindcss as the CSS framework.
- Using Jest as the testing framework.
- A simple text input is used to get the SIN from the user.
- Another approach could be to create a group of side-by-side input fields for each digit of the SIN. I assumed this
  approach is not required for this task.

### Approach

- Created a function that can validate the SIN and returns a reason of failure if the SIN is invalid.
- Created a react hook that can handle the input and validate the SIN.
- Created a `<SinValidator />` component that uses the hook and displays the result of the validation.
- Additional components created to show the icon cues and the error message.
- Unit tests added for all functions and components.

### Logic

The validation function does the following steps one by one:

```typescript
export function validateSin(sin: string) {
  // ...
}
```

1. Check the length of the SIN. It should be 9 digits. If not, returns with an error message.
2. Check if the SIN contains only digits. If not, returns with an error message.
3. Check if the SIN satisfies the Luhn algorithm. If not, returns with an error message.

The logic for the Luhn algorithm is as follows:

1. Extract all the digits

```typescript
  const digits = sin.split("").map(Number);
```

2. Loop through all the digits.

```typescript
  digits.map((d, i) => {
```

3. If the index of the digit is even, double the digit.

```typescript
  const secondDigitsDoubled = digits.map((d, i) => {
  if (i % 2 === 0) {
    return d;
  }
  const doubled = d * 2;
...
});
```

4. If the doubled digit is greater than 9, subtract 9 from it. (In the PDF file it says to sum the digits if the doubled
   digit is greater than 9, this gives the same results for single digits)

```typescript
if (doubled > 9) {
  return doubled - 9;
}
return doubled;
```

5. Sum all the digits.

```typescript
  const sum = secondDigitsDoubled.reduce((acc, d) => acc + d, 0);
```

6. If the sum is divisible by 10, the SIN is valid.

```typescript
  return sum % 10 === 0;
```
