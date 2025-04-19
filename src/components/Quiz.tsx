
import { useState, useRef, useEffect } from "react";
import { Question, QuizState } from "../types/quiz";
import { allQuestions } from "../data/questions";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { Progress } from "./ui/progress";
import { toast } from "sonner";
import { Brain, CheckCircle2, XCircle, VolumeUp, Lightbulb, ChevronRight, ChevronLeft } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Switch } from "./ui/switch";

export const Quiz = () => {
  const [state, setState] = useState<QuizState>({
    currentQuestion: 0,
    score: 0,
    answers: [],
    completed: false,
    voiceLanguage: "english"
  });

  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [showExplanation, setShowExplanation] = useState<boolean>(false);
  const [selectedTopic, setSelectedTopic] = useState<string>("all");
  const [filteredQuestions, setFilteredQuestions] = useState<Question[]>(allQuestions);
  const speechSynthesisRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    // Filter questions based on selected topic
    if (selectedTopic === "all") {
      setFilteredQuestions(allQuestions);
    } else {
      setFilteredQuestions(allQuestions.filter(q => q.topic === selectedTopic));
    }
    
    // Reset current question when changing topics
    setState(prev => ({
      ...prev,
      currentQuestion: 0,
      score: 0,
      answers: [],
      completed: false
    }));
    
    setSelectedAnswer("");
    setShowExplanation(false);
  }, [selectedTopic]);

  // Initialize speech synthesis
  useEffect(() => {
    speechSynthesisRef.current = new SpeechSynthesisUtterance();
    
    return () => {
      if (speechSynthesisRef.current) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const currentQuestion: Question = filteredQuestions[state.currentQuestion];

  const getNextQuestion = (currentTopic: string, wasCorrect: boolean): number => {
    // Adaptive logic: if answer was wrong, try to find another question
    // of similar difficulty in the same topic
    if (!wasCorrect) {
      const similarQuestions = filteredQuestions.filter((q, idx) => 
        idx > state.currentQuestion && 
        q.topic === currentTopic && 
        q.difficulty === currentQuestion.difficulty
      );
      if (similarQuestions.length > 0) {
        return filteredQuestions.indexOf(similarQuestions[0]);
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
      completed: nextQuestionIndex >= filteredQuestions.length
    }));
    setSelectedAnswer("");
    setShowExplanation(false);
  };

  const resetQuiz = () => {
    setState({
      currentQuestion: 0,
      score: 0,
      answers: [],
      completed: false,
      voiceLanguage: state.voiceLanguage
    });
    toast("Starting a new quiz session", {
      icon: <Brain className="text-blue-500" />,
    });
  };

  const speakText = (text: string) => {
    if (speechSynthesisRef.current) {
      window.speechSynthesis.cancel();
      
      const utterance = speechSynthesisRef.current;
      utterance.text = text;
      utterance.lang = state.voiceLanguage === "hindi" ? "hi-IN" : "en-US";
      
      // Try to find a suitable voice
      const voices = window.speechSynthesis.getVoices();
      const voice = voices.find(v => v.lang === utterance.lang);
      if (voice) {
        utterance.voice = voice;
      }
      
      window.speechSynthesis.speak(utterance);
    }
  };

  const toggleLanguage = () => {
    setState(prev => ({
      ...prev,
      voiceLanguage: prev.voiceLanguage === "english" ? "hindi" : "english"
    }));
    
    toast.info(`Voice language set to ${state.voiceLanguage === "english" ? "Hindi" : "English"}`);
  };

  const handlePrevQuestion = () => {
    if (state.currentQuestion > 0) {
      setState(prev => ({
        ...prev,
        currentQuestion: prev.currentQuestion - 1
      }));
      setSelectedAnswer("");
      setShowExplanation(false);
    }
  };

  const topics = ["all", "Algebra", "Geometry", "Number Theory", "Calculus"];

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
        <p className="text-xl mb-4">Your Score: {state.score} / {state.answers.length}</p>
        
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
      <div className="flex justify-between items-center mb-6">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Topic Selection</h2>
          <div className="flex flex-wrap gap-2">
            {topics.map((topic) => (
              <Button
                key={topic}
                variant={selectedTopic === topic ? "default" : "outline"}
                onClick={() => setSelectedTopic(topic)}
                className="text-sm"
              >
                {topic === "all" ? "All Topics" : topic}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <Label htmlFor="voice-toggle" className="text-sm">
            {state.voiceLanguage === "english" ? "English" : "Hindi"}
          </Label>
          <Switch
            id="voice-toggle"
            checked={state.voiceLanguage === "hindi"}
            onCheckedChange={toggleLanguage}
          />
        </div>
      </div>
      
      <div className="mb-4">
        <Progress value={(state.currentQuestion / filteredQuestions.length) * 100} />
      </div>
      
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold">
              Question {state.currentQuestion + 1} of {filteredQuestions.length}
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

        <div className="flex items-center justify-between">
          <p className="text-lg">{currentQuestion.question}</p>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => speakText(currentQuestion.question)}
          >
            <VolumeUp className="h-4 w-4" />
          </Button>
        </div>

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

        <div className="flex space-x-4 pt-2">
          <Button 
            onClick={handlePrevQuestion} 
            variant="outline"
            disabled={state.currentQuestion === 0}
            className="w-1/3"
          >
            <ChevronLeft className="mr-1 h-4 w-4" /> Previous
          </Button>

          <Button 
            onClick={handleAnswer} 
            disabled={!selectedAnswer}
            className="w-2/3"
          >
            {state.currentQuestion < filteredQuestions.length - 1 ? (
              <>Next <ChevronRight className="ml-1 h-4 w-4" /></>
            ) : (
              "Finish Quiz"
            )}
          </Button>
        </div>
        
        <div className="mt-4 pt-2 border-t">
          <div className="flex justify-between items-center">
            <p className="font-medium">Need help?</p>
            
            <Sheet>
              <SheetTrigger asChild>
                <Button 
                  variant="secondary" 
                  size="sm"
                  onClick={() => setShowExplanation(true)}
                  className="flex items-center"
                >
                  <Lightbulb className="mr-1 h-4 w-4" />
                  View Explanation
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Explanation</SheetTitle>
                </SheetHeader>
                <div className="mt-4 space-y-4">
                  <p>{currentQuestion.explanation}</p>
                  <Button 
                    onClick={() => speakText(currentQuestion.explanation)} 
                    variant="outline"
                    className="w-full"
                  >
                    <VolumeUp className="mr-2 h-4 w-4" />
                    Listen to Explanation
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </Card>
  );
};
