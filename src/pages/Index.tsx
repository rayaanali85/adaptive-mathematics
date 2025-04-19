
import { useState } from "react";
import { Quiz } from "@/components/Quiz";
import { Navigation } from "@/components/Navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  BookOpen, 
  BarChart2,
  Award,
  User,
  Clock,
  TrendingUp,
  GraduationCap
} from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("practice");

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Navigation />
      
      <div className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">AI Mathematics Tutor</h1>
            <p className="text-lg text-muted-foreground">
              An adaptive learning experience that grows with you
            </p>
          </div>
          
          <Tabs defaultValue="practice" onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="practice" className="flex items-center">
                <BookOpen className="mr-2 h-4 w-4" />
                Practice
              </TabsTrigger>
              <TabsTrigger value="progress" className="flex items-center">
                <BarChart2 className="mr-2 h-4 w-4" />
                Progress
              </TabsTrigger>
              <TabsTrigger value="achievements" className="flex items-center">
                <Award className="mr-2 h-4 w-4" />
                Achievements
              </TabsTrigger>
              <TabsTrigger value="profile" className="flex items-center">
                <User className="mr-2 h-4 w-4" />
                Profile
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="practice">
              {activeTab === "practice" && (
                <div className="space-y-8">
                  <div className="grid gap-6 md:grid-cols-3 mb-8">
                    <Card className="p-6">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-5 w-5 text-blue-500" />
                        <h3 className="text-lg font-semibold">Study Time</h3>
                      </div>
                      <p className="text-3xl font-bold mt-2">12.5 hours</p>
                      <p className="text-sm text-muted-foreground">Last 30 days</p>
                    </Card>
                    
                    <Card className="p-6">
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="h-5 w-5 text-green-500" />
                        <h3 className="text-lg font-semibold">Success Rate</h3>
                      </div>
                      <p className="text-3xl font-bold mt-2">75%</p>
                      <p className="text-sm text-muted-foreground">Improving +5%</p>
                    </Card>
                    
                    <Card className="p-6">
                      <div className="flex items-center space-x-2">
                        <GraduationCap className="h-5 w-5 text-purple-500" />
                        <h3 className="text-lg font-semibold">Mastery Level</h3>
                      </div>
                      <p className="text-3xl font-bold mt-2">Intermediate</p>
                      <p className="text-sm text-muted-foreground">3 topics mastered</p>
                    </Card>
                  </div>
                  
                  <Quiz />
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="progress">
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Topic Progress</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>Algebra</span>
                        <span>80%</span>
                      </div>
                      <Progress value={80} />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>Geometry</span>
                        <span>65%</span>
                      </div>
                      <Progress value={65} />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>Number Theory</span>
                        <span>45%</span>
                      </div>
                      <Progress value={45} />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>Calculus</span>
                        <span>30%</span>
                      </div>
                      <Progress value={30} />
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Weekly Activity</h3>
                  <div className="grid grid-cols-7 gap-2 text-center">
                    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => (
                      <div key={day}>
                        <div className={`mx-auto w-8 h-16 rounded-t-md ${i < 5 ? "bg-blue-500" : "bg-blue-200"}`} 
                             style={{ height: `${(i < 5 ? 40 + i * 10 : 20)}px` }}></div>
                        <p className="text-xs mt-1">{day}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">Questions answered this week: 124</p>
                </Card>
                
                <Card className="p-6 md:col-span-2">
                  <h3 className="text-xl font-semibold mb-4">Skill Breakdown</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-slate-50 rounded-lg">
                      <p className="font-medium mb-1">Problem Solving</p>
                      <div className="relative mx-auto w-20 h-20 mb-2">
                        <div className="absolute inset-0 rounded-full border-8 border-blue-100"></div>
                        <div className="absolute inset-0 rounded-full border-8 border-blue-500 border-t-transparent"
                             style={{ transform: "rotate(72deg)" }}></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-xl font-bold">80%</span>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground">Advanced</p>
                    </div>
                    
                    <div className="text-center p-4 bg-slate-50 rounded-lg">
                      <p className="font-medium mb-1">Critical Thinking</p>
                      <div className="relative mx-auto w-20 h-20 mb-2">
                        <div className="absolute inset-0 rounded-full border-8 border-blue-100"></div>
                        <div className="absolute inset-0 rounded-full border-8 border-blue-500 border-t-transparent"
                             style={{ transform: "rotate(54deg)" }}></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-xl font-bold">65%</span>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground">Intermediate</p>
                    </div>
                    
                    <div className="text-center p-4 bg-slate-50 rounded-lg">
                      <p className="font-medium mb-1">Conceptual Understanding</p>
                      <div className="relative mx-auto w-20 h-20 mb-2">
                        <div className="absolute inset-0 rounded-full border-8 border-blue-100"></div>
                        <div className="absolute inset-0 rounded-full border-8 border-blue-500 border-t-transparent"
                             style={{ transform: "rotate(90deg)" }}></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-xl font-bold">75%</span>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground">Advanced</p>
                    </div>
                    
                    <div className="text-center p-4 bg-slate-50 rounded-lg">
                      <p className="font-medium mb-1">Speed & Accuracy</p>
                      <div className="relative mx-auto w-20 h-20 mb-2">
                        <div className="absolute inset-0 rounded-full border-8 border-blue-100"></div>
                        <div className="absolute inset-0 rounded-full border-8 border-blue-500 border-t-transparent"
                             style={{ transform: "rotate(43.2deg)" }}></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-xl font-bold">60%</span>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground">Intermediate</p>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="achievements">
              <div className="grid gap-6 md:grid-cols-3">
                {["Math Explorer", "10-Day Streak", "Perfect Score", "Quick Solver", "Topic Master", "Challenger"].map((achievement, i) => (
                  <Card key={achievement} className={`p-6 ${i > 2 ? "opacity-40" : ""}`}>
                    <div className="text-center">
                      <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-3 ${
                        i === 0 ? "bg-yellow-100" : 
                        i === 1 ? "bg-blue-100" : 
                        i === 2 ? "bg-green-100" : "bg-gray-100"
                      }`}>
                        <Award className={`h-8 w-8 ${
                          i === 0 ? "text-yellow-500" : 
                          i === 1 ? "text-blue-500" : 
                          i === 2 ? "text-green-500" : "text-gray-400"
                        }`} />
                      </div>
                      <h3 className="font-semibold mb-1">{achievement}</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {i === 0 ? "Completed 5 different topics" : 
                         i === 1 ? "Practiced for 10 days in a row" : 
                         i === 2 ? "Got 100% on a quiz with 10+ questions" : 
                         i === 3 ? "Answered 5 questions in under 5 minutes" :
                         i === 4 ? "Mastered all questions in a topic" :
                         "Completed all hard questions in a topic"}
                      </p>
                      <div className="text-xs font-semibold px-2 py-1 rounded-full inline-block bg-slate-100">
                        {i > 2 ? "Locked" : "Achieved"}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="profile">
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4">User Profile</h3>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center text-white text-2xl font-bold mr-4">
                      US
                    </div>
                    <div>
                      <p className="text-lg font-semibold">User Student</p>
                      <p className="text-sm text-muted-foreground">Member since April 2025</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium mb-1">Learning Preferences</p>
                      <div className="flex space-x-2">
                        <div className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Visual</div>
                        <div className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Step-by-step</div>
                        <div className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Explanation</div>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium mb-1">Voice Preference</p>
                      <div className="flex space-x-2">
                        <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                          English (Default)
                        </div>
                        <div className="bg-slate-100 text-slate-800 text-xs px-2 py-1 rounded">
                          Hindi
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Learning Summary</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 border rounded bg-slate-50">
                      <div>
                        <p className="font-medium">Total Study Time</p>
                        <p className="text-sm text-muted-foreground">Since joining</p>
                      </div>
                      <p className="text-xl font-bold">40.5 hrs</p>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 border rounded bg-slate-50">
                      <div>
                        <p className="font-medium">Questions Attempted</p>
                        <p className="text-sm text-muted-foreground">All time</p>
                      </div>
                      <p className="text-xl font-bold">526</p>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 border rounded bg-slate-50">
                      <div>
                        <p className="font-medium">Average Score</p>
                        <p className="text-sm text-muted-foreground">All quizzes</p>
                      </div>
                      <p className="text-xl font-bold">74%</p>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 border rounded bg-slate-50">
                      <div>
                        <p className="font-medium">Current Streak</p>
                        <p className="text-sm text-muted-foreground">Consecutive days</p>
                      </div>
                      <p className="text-xl font-bold">8 days</p>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Index;
