
export interface Question {
  id: string;
  topic: "Algebra" | "Geometry" | "Number Theory" | "Calculus";
  question: string;
  options: string[];
  answer: string;
  difficulty: "easy" | "medium" | "hard";
  explanation: string; // Added explanation field
  stepByStep?: string[]; // Optional step-by-step solution
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
  selectedTopic?: string; // For topic selection
  voiceLanguage: "english" | "hindi"; // For voice language selection
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
  recentlyStudied: string[]; // Track recently studied topics
  streak: number; // Days in a row practicing
}

