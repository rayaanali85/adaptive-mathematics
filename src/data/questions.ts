
import { Question } from "../types/quiz";

export const questions: Question[] = [
  {
    id: "1",
    topic: "Algebra",
    question: "Solve for x: 2x + 3 = 7",
    options: ["x = 2", "x = 3", "x = 1", "x = 5"],
    answer: "x = 2",
    difficulty: "easy"
  },
  {
    id: "2", 
    topic: "Algebra",
    question: "Simplify: (x + 2)(x - 2)",
    options: ["x² - 4", "x² + 4", "x² - 2", "x² + 2x - 4"],
    answer: "x² - 4",
    difficulty: "medium"
  },
  {
    id: "3",
    topic: "Algebra",
    question: "Solve the equation: 3x - 8 = 16",
    options: ["x = 8", "x = 6", "x = 12", "x = 10"],
    answer: "x = 8",
    difficulty: "easy"
  },
  {
    id: "4",
    topic: "Algebra",
    question: "Factor: x² - 9",
    options: ["(x+3)(x-3)", "(x+9)(x-9)", "(x+3)(x+3)", "(x-3)(x-3)"],
    answer: "(x+3)(x-3)",
    difficulty: "medium"
  },
  {
    id: "5",
    topic: "Geometry",
    question: "What is the area of a triangle with base 4 and height 3?",
    options: ["6", "12", "7", "9"],
    answer: "6",
    difficulty: "easy"
  },
  {
    id: "6",
    topic: "Geometry",
    question: "How many degrees are in the angles of a triangle?",
    options: ["180", "90", "360", "270"],
    answer: "180",
    difficulty: "easy"
  },
  {
    id: "7",
    topic: "Geometry",
    question: "Find the circumference of a circle with radius 5",
    options: ["10π", "25π", "15π", "20π"],
    answer: "10π",
    difficulty: "medium"
  },
  {
    id: "8",
    topic: "Geometry",
    question: "Calculate the area of a square with side length 6",
    options: ["36", "24", "30", "42"],
    answer: "36",
    difficulty: "easy"
  }
];

