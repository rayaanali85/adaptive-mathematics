import { Question } from "../types/quiz";

export const questions: Question[] = [
  {
    id: "1",
    topic: "Algebra",
    question: "Solve for x: 2x + 3 = 7",
    options: ["x = 2", "x = 3", "x = 1", "x = 5"],
    answer: "x = 2",
    difficulty: "easy",
    explanation: "To solve for x, we need to isolate x by performing operations on both sides of the equation. First, subtract 3 from both sides: 2x + 3 - 3 = 7 - 3, which gives 2x = 4. Then divide both sides by 2: 2x/2 = 4/2, resulting in x = 2."
  },
  {
    id: "2", 
    topic: "Algebra",
    question: "Simplify: (x + 2)(x - 2)",
    options: ["x² - 4", "x² + 4", "x² - 2", "x² + 2x - 4"],
    answer: "x² - 4",
    difficulty: "medium",
    explanation: "This is the difference of squares pattern: (a + b)(a - b) = a² - b². Here, a = x and b = 2, so (x + 2)(x - 2) = x² - 2² = x² - 4."
  },
  {
    id: "3",
    topic: "Algebra",
    question: "Solve the equation: 3x - 8 = 16",
    options: ["x = 8", "x = 6", "x = 12", "x = 10"],
    answer: "x = 8",
    difficulty: "easy",
    explanation: "To solve 3x - 8 = 16, add 8 to both sides to get 3x = 24, then divide both sides by 3 to get x = 8."
  },
  {
    id: "4",
    topic: "Algebra",
    question: "Factor: x² - 9",
    options: ["(x+3)(x-3)", "(x+9)(x-9)", "(x+3)(x+3)", "(x-3)(x-3)"],
    answer: "(x+3)(x-3)",
    difficulty: "medium",
    explanation: "This is the difference of squares pattern: (a + b)(a - b) = a² - b². Here, a = x and b = 3, so (x + 3)(x - 3) = x² - 3² = x² - 9."
  },
  {
    id: "5",
    topic: "Geometry",
    question: "What is the area of a triangle with base 4 and height 3?",
    options: ["6", "12", "7", "9"],
    answer: "6",
    difficulty: "easy",
    explanation: "The area of a triangle is given by the formula (base × height) / 2. Here, the base is 4 and the height is 3, so the area is (4 × 3) / 2 = 6."
  },
  {
    id: "6",
    topic: "Geometry",
    question: "How many degrees are in the angles of a triangle?",
    options: ["180", "90", "360", "270"],
    answer: "180",
    difficulty: "easy",
    explanation: "A triangle has three angles that add up to 180 degrees."
  },
  {
    id: "7",
    topic: "Geometry",
    question: "Find the circumference of a circle with radius 5",
    options: ["10π", "25π", "15π", "20π"],
    answer: "10π",
    difficulty: "medium",
    explanation: "The circumference of a circle is given by the formula 2πr. Here, the radius is 5, so the circumference is 2π × 5 = 10π."
  },
  {
    id: "8",
    topic: "Geometry",
    question: "Calculate the area of a square with side length 6",
    options: ["36", "24", "30", "42"],
    answer: "36",
    difficulty: "easy",
    explanation: "The area of a square is given by the formula side². Here, the side length is 6, so the area is 6² = 36."
  },
  {
    id: "n1",
    topic: "Number Theory",
    question: "What is the greatest common divisor (GCD) of 48 and 18?",
    options: ["6", "12", "9", "3"],
    answer: "6",
    difficulty: "medium",
    explanation: "To find the GCD, we can use the Euclidean algorithm. 48 = 18 × 2 + 12, then 18 = 12 × 1 + 6, and finally 12 = 6 × 2 + 0. Since the remainder is 0, the GCD is 6."
  },
  {
    id: "n2",
    topic: "Number Theory",
    question: "Which of the following is a prime number?",
    options: ["51", "67", "91", "87"],
    answer: "67",
    difficulty: "easy",
    explanation: "A prime number is a number greater than 1 that is only divisible by 1 and itself. 51 = 3 × 17, 91 = 7 × 13, 87 = 3 × 29, but 67 has no factors other than 1 and itself, making it prime."
  },
  {
    id: "n3",
    topic: "Number Theory",
    question: "What is the least common multiple (LCM) of 12 and 18?",
    options: ["36", "24", "6", "72"],
    answer: "36",
    difficulty: "medium",
    explanation: "The LCM can be found using the formula: LCM(a,b) = (a × b) / GCD(a,b). We know GCD(12,18) = 6, so LCM(12,18) = (12 × 18) / 6 = 216 / 6 = 36."
  },
  {
    id: "c1",
    topic: "Calculus",
    question: "What is the derivative of f(x) = x²?",
    options: ["f'(x) = 2x", "f'(x) = x", "f'(x) = 2", "f'(x) = x²"],
    answer: "f'(x) = 2x",
    difficulty: "easy",
    explanation: "For a function f(x) = xⁿ, the derivative is f'(x) = n×xⁿ⁻¹. In this case, f(x) = x², so n = 2, and f'(x) = 2×x²⁻¹ = 2x."
  },
  {
    id: "c2",
    topic: "Calculus",
    question: "Evaluate ∫ 2x dx",
    options: ["x² + C", "2x² + C", "x + C", "2x + C"],
    answer: "x² + C",
    difficulty: "medium",
    explanation: "To find the integral of 2x, we use the power rule: ∫ xⁿ dx = xⁿ⁺¹/(n+1) + C. Here, ∫ 2x dx = 2 ∫ x dx = 2(x² / 2) + C = x² + C."
  },
  {
    id: "c3",
    topic: "Calculus",
    question: "What is the limit as x approaches 0 of sin(x)/x?",
    options: ["0", "1", "∞", "Does not exist"],
    answer: "1",
    difficulty: "hard",
    explanation: "This is a well-known limit in calculus. Although both sin(x) and x approach 0 as x approaches 0, their ratio approaches 1. This can be verified using L'Hôpital's rule or by analyzing the behavior of sin(x)/x near x = 0."
  }
];

export const generateMoreQuestions = (): Question[] => {
  const additionalQuestions: Question[] = [];
  
  for (let i = 1; i <= 20; i++) {
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 10) + 1;
    const c = a * i + b;
    
    additionalQuestions.push({
      id: `auto-alg-${i}`,
      topic: "Algebra",
      question: `Solve for x: ${a}x + ${b} = ${c}`,
      options: [`x = ${i}`, `x = ${i+1}`, `x = ${i-1}`, `x = ${i+2}`],
      answer: `x = ${i}`,
      difficulty: i < 7 ? "easy" : i < 15 ? "medium" : "hard",
      explanation: `To solve ${a}x + ${b} = ${c}, subtract ${b} from both sides to get ${a}x = ${c-b}. Then divide both sides by ${a} to get x = ${i}.`
    });
  }
  
  for (let i = 1; i <= 20; i++) {
    const n = i % 5 + 1;
    
    additionalQuestions.push({
      id: `auto-calc-${i}`,
      topic: "Calculus",
      question: `Find the derivative of f(x) = x^${n}`,
      options: [`f'(x) = ${n}x^${n-1}`, `f'(x) = ${n+1}x^${n}`, `f'(x) = x^${n-1}`, `f'(x) = ${n}x^${n}`],
      answer: `f'(x) = ${n}x^${n-1}`,
      difficulty: n <= 2 ? "easy" : n <= 4 ? "medium" : "hard",
      explanation: `The derivative of f(x) = x^${n} is f'(x) = ${n}x^${n-1} using the power rule d/dx(x^n) = n*x^(n-1).`
    });
  }
  
  return additionalQuestions;
};

export const allQuestions = [...questions, ...generateMoreQuestions()];
