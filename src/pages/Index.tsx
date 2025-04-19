
import { Quiz } from "@/components/Quiz";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Navigation />
      
      <div className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">AI Mathematics Tutor</h1>
            <p className="text-lg text-muted-foreground">
              An adaptive learning experience that grows with you
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Quick Stats</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Total Questions Answered</p>
                  <p className="text-2xl font-bold">24</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Success Rate</p>
                  <p className="text-2xl font-bold text-green-600">75%</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Recent Topics</h2>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span>Algebra</span>
                  <span className="text-green-600">8/10</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Geometry</span>
                  <span className="text-yellow-600">6/10</span>
                </div>
              </div>
            </div>
          </div>
          
          <Quiz />
        </div>
      </div>
    </div>
  );
};

export default Index;
