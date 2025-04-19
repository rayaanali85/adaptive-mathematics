
import { Quiz } from "@/components/Quiz";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">AI Mathematics Tutor</h1>
          <p className="text-lg text-muted-foreground">
            An adaptive learning experience that grows with you
          </p>
        </div>
        
        <Quiz />
      </div>
    </div>
  );
};

export default Index;
