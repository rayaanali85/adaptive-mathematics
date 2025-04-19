
export interface Question {
  id: string;
  topic: "Algebra" | "Geometry";
  question: string;
  options: string[];
  answer: string;
  difficulty: "easy" | "medium" | "hard";
}

export interface QuizState {
  currentQuestion: number;
  score: number;
  answers: {
    topic: string;
    correct: boolean;
    difficulty: string;
  }[];
  completed: boolean;
}
