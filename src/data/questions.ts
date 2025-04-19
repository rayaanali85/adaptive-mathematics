
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
    topic: "Geometry",
    question: "What is the area of a triangle with base 4 and height 3?",
    options: ["6", "12", "7", "9"],
    answer: "6",
    difficulty: "easy"
  },
  {
    id: "4",
    topic: "Geometry",
    question: "How many degrees are in the angles of a triangle?",
    options: ["180", "90", "360", "270"],
    answer: "180",
    difficulty: "easy"
  }
];
