
export interface Question {
  id: string;
  topic: "Algebra" | "Geometry";
  question: string;
  options: string[];
  answer: string;
  difficulty: "easy" | "medium" | "hard";
  explanation?: string;
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

export interface UserProgress {
  totalQuestions: number;
  correctAnswers: number;
  topicPerformance: {
    [key: string]: {
      total: number;
      correct: number;
    };
  };
}
