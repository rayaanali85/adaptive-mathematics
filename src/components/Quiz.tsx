
import { useState } from "react";
import { Question, QuizState } from "../types/quiz";
import { questions } from "../data/questions";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { Progress } from "./ui/progress";
import { toast } from "sonner";
import { Brain, CheckCircle2, XCircle } from "lucide-react";

export const Quiz = () => {
  const [state, setState] = useState<QuizState>({
    currentQuestion: 0,
    score: 0,
    answers: [],
    completed: false
  });

  const [selectedAnswer, setSelectedAnswer] = useState<string>("");

  const currentQuestion: Question = questions[state.currentQuestion];

  const getNextQuestion = (currentTopic: string, wasCorrect: boolean): number => {
    // Simple adaptive logic: if answer was wrong, try to find another question
    // of similar difficulty in the same topic
    if (!wasCorrect) {
      const similarQuestions = questions.filter((q, idx) => 
        idx > state.currentQuestion && 
        q.topic === currentTopic && 
        q.difficulty === currentQuestion.difficulty
      );
      if (similarQuestions.length > 0) {
        return questions.indexOf(similarQuestions[0]);
      }
    }
    return state.currentQuestion + 1;
  };

  const handleAnswer = () => {
    if (!selectedAnswer) return;

    const isCorrect = selectedAnswer === currentQuestion.answer;
    const nextQuestionIndex = getNextQuestion(currentQuestion.topic, isCorrect);

    if (isCorrect) {
      toast.success("Correct answer! Well done!", {
        icon: <CheckCircle2 className="text-green-500" />,
      });
    } else {
      toast.error("Not quite right. Keep trying!", {
        icon: <XCircle className="text-red-500" />,
      });
    }

    setState(prev => ({
      ...prev,
      score: isCorrect ? prev.score + 1 : prev.score,
      answers: [...prev.answers, {
        topic: currentQuestion.topic,
        correct: isCorrect,
        difficulty: currentQuestion.difficulty
      }],
      currentQuestion: nextQuestionIndex,
      completed: nextQuestionIndex >= questions.length
    }));
    setSelectedAnswer("");
  };

  const resetQuiz = () => {
    setState({
      currentQuestion: 0,
      score: 0,
      answers: [],
      completed: false
    });
    toast("Starting a new quiz session", {
      icon: <Brain className="text-blue-500" />,
    });
  };

  if (state.completed) {
    const topicPerformance = state.answers.reduce((acc, curr) => {
      acc[curr.topic] = acc[curr.topic] || { total: 0, correct: 0 };
      acc[curr.topic].total++;
      if (curr.correct) acc[curr.topic].correct++;
      return acc;
    }, {} as Record<string, { total: number; correct: number }>);

    const difficultyPerformance = state.answers.reduce((acc, curr) => {
      acc[curr.difficulty] = acc[curr.difficulty] || { total: 0, correct: 0 };
      acc[curr.difficulty].total++;
      if (curr.correct) acc[curr.difficulty].correct++;
      return acc;
    }, {} as Record<string, { total: number; correct: number }>);

    return (
      <Card className="p-6 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Quiz Completed! 🎉</h2>
        <p className="text-xl mb-4">Your Score: {state.score} / {questions.length}</p>
        
        <div className="space-y-6 mb-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Performance by Topic:</h3>
            {Object.entries(topicPerformance).map(([topic, perf]) => (
              <div key={topic} className="space-y-2 mb-4">
                <p className="font-medium">{topic}</p>
                <Progress value={(perf.correct / perf.total) * 100} />
                <p className="text-sm text-muted-foreground">
                  {perf.correct} correct out of {perf.total} questions
                </p>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Performance by Difficulty:</h3>
            {Object.entries(difficultyPerformance).map(([difficulty, perf]) => (
              <div key={difficulty} className="space-y-2 mb-4">
                <p className="font-medium capitalize">{difficulty}</p>
                <Progress value={(perf.correct / perf.total) * 100} />
                <p className="text-sm text-muted-foreground">
                  {perf.correct} correct out of {perf.total} questions
                </p>
              </div>
            ))}
          </div>
        </div>

        <Button onClick={resetQuiz} className="w-full">Try Again</Button>
      </Card>
    );
  }

  return (
    <Card className="p-6 max-w-2xl mx-auto">
      <div className="mb-4">
        <Progress value={(state.currentQuestion / questions.length) * 100} />
      </div>
      
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold">
              Question {state.currentQuestion + 1} of {questions.length}
            </h2>
            <p className="text-sm text-muted-foreground">
              Topic: {currentQuestion.topic} • Difficulty: {currentQuestion.difficulty}
            </p>
          </div>
          <div className="text-right">
            <p className="font-medium">Score</p>
            <p className="text-2xl font-bold">{state.score}</p>
          </div>
        </div>

        <p className="text-lg">{currentQuestion.question}</p>

        <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer}>
          {currentQuestion.options.map((option, index) => (
            <div key={index} className="flex items-center space-x-2 p-2 rounded hover:bg-slate-50">
              <RadioGroupItem value={option} id={`option-${index}`} />
              <Label htmlFor={`option-${index}`} className="flex-grow cursor-pointer">
                {option}
              </Label>
            </div>
          ))}
        </RadioGroup>

        <Button 
          onClick={handleAnswer} 
          disabled={!selectedAnswer}
          className="w-full mt-4"
        >
          Submit Answer
        </Button>
      </div>
    </Card>
  );
};

