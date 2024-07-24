import React from 'react';
import { Code, Terminal, Zap, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Unlock the Power of Code</h1>
          <p className="text-xl mb-8">Learn, create, and innovate with our cutting-edge coding platform</p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Get Started
          </Button>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Platform?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<Code className="h-10 w-10 text-blue-500" />}
              title="Multiple Languages"
              description="Learn and code in various programming languages"
            />
            <FeatureCard
              icon={<Terminal className="h-10 w-10 text-green-500" />}
              title="Interactive Console"
              description="Practice coding with our built-in interactive console"
            />
            <FeatureCard
              icon={<Zap className="h-10 w-10 text-yellow-500" />}
              title="Real-time Collaboration"
              description="Work on projects together in real-time with other developers"
            />
            <FeatureCard
              icon={<BookOpen className="h-10 w-10 text-purple-500" />}
              title="Comprehensive Tutorials"
              description="Access a wide range of tutorials and learning resources"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Coding?</h2>
          <p className="text-xl mb-8">Join thousands of developers and start your coding journey today!</p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Sign Up Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-200 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>&copy; 2023 Code Learning Platform. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          {icon}
          <span className="ml-2">{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default Index;