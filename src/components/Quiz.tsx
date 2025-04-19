
import { useState } from "react";
import { Question, QuizState } from "../types/quiz";
import { questions } from "../data/questions";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { Progress } from "./ui/progress";

export const Quiz = () => {
  const [state, setState] = useState<QuizState>({
    currentQuestion: 0,
    score: 0,
    answers: [],
    completed: false
  });

  const [selectedAnswer, setSelectedAnswer] = useState<string>("");

  const currentQuestion: Question = questions[state.currentQuestion];

  const handleAnswer = () => {
    if (!selectedAnswer) return;

    const isCorrect = selectedAnswer === currentQuestion.answer;
    setState(prev => ({
      ...prev,
      score: isCorrect ? prev.score + 1 : prev.score,
      answers: [...prev.answers, {
        topic: currentQuestion.topic,
        correct: isCorrect,
        difficulty: currentQuestion.difficulty
      }],
      currentQuestion: prev.currentQuestion + 1,
      completed: prev.currentQuestion + 1 >= questions.length
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
  };

  if (state.completed) {
    const topicPerformance = state.answers.reduce((acc, curr) => {
      acc[curr.topic] = acc[curr.topic] || { total: 0, correct: 0 };
      acc[curr.topic].total++;
      if (curr.correct) acc[curr.topic].correct++;
      return acc;
    }, {} as Record<string, { total: number; correct: number }>);

    return (
      <Card className="p-6 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Quiz Completed! 🎉</h2>
        <p className="text-xl mb-4">Your Score: {state.score} / {questions.length}</p>
        
        <div className="space-y-4 mb-6">
          <h3 className="text-lg font-semibold">Performance by Topic:</h3>
          {Object.entries(topicPerformance).map(([topic, perf]) => (
            <div key={topic} className="space-y-2">
              <p className="font-medium">{topic}</p>
              <Progress value={(perf.correct / perf.total) * 100} />
              <p className="text-sm text-muted-foreground">
                {perf.correct} correct out of {perf.total} questions
              </p>
            </div>
          ))}
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
        <h2 className="text-xl font-semibold">
          Question {state.currentQuestion + 1} of {questions.length}
        </h2>
        <p className="text-sm text-muted-foreground">Topic: {currentQuestion.topic}</p>
        <p className="text-lg">{currentQuestion.question}</p>

        <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer}>
          {currentQuestion.options.map((option, index) => (
            <div key={index} className="flex items-center space-x-2">
              <RadioGroupItem value={option} id={`option-${index}`} />
              <Label htmlFor={`option-${index}`}>{option}</Label>
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
