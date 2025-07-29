import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Shield, 
  MessageCircle, 
  Search, 
  FileText, 
  Brain, 
  Monitor, 
  Zap, 
  Github, 
  Download,
  Lock,
  Database,
  Cpu
} from 'lucide-react'
import './App.css'

function App() {
  const features = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Privacy-First",
      description: "All processing happens locally on your machine. Your data never leaves your device."
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-green-600" />,
      title: "Chat Interface",
      description: "Interactive chat with your documents using natural language queries."
    },
    {
      icon: <Search className="h-8 w-8 text-purple-600" />,
      title: "Advanced Search",
      description: "Semantic search across your knowledge base with intelligent results."
    },
    {
      icon: <FileText className="h-8 w-8 text-orange-600" />,
      title: "Document Processing",
      description: "Support for various file formats including PDF, Word, and text files."
    },
    {
      icon: <Brain className="h-8 w-8 text-red-600" />,
      title: "Local LLM Integration",
      description: "Works seamlessly with local language models for complete privacy."
    },
    {
      icon: <Monitor className="h-8 w-8 text-indigo-600" />,
      title: "Desktop App",
      description: "Native Electron application with a modern, intuitive interface."
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-600" />,
      title: "Fast & Efficient",
      description: "Optimized for local processing with lightning-fast response times."
    },
    {
      icon: <Database className="h-8 w-8 text-teal-600" />,
      title: "Knowledge Base",
      description: "Build and maintain your personal knowledge repository with ease."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src="./icon.png" alt="RAGBASE Logo" className="h-8 w-8" />
            <span className="text-2xl font-bold bg-gradient-to-r from-[#0152C9] via-[#0168D5] to-[#1E40AF] bg-clip-text text-transparent">
              RAGBASE
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <a href="https://github.com/reportify-ai/ragbase" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </a>
            </Button>
            <Button size="sm" asChild>
              <a href="https://github.com/reportify-ai/ragbase/releases" target="_blank" rel="noopener noreferrer">
                <Download className="h-4 w-4 mr-2" />
                Download
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge variant="secondary" className="mb-6">
            <Cpu className="h-3 w-3 mr-1" />
            Open Source • Local Processing
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent leading-tight pb-2">
            Your Private Knowledge Base
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            RAGBASE is an open-source local knowledge-base client that supports offline models 
            to keep your data private. Chat, search, and conduct deep research with your local files 
            without any privacy concerns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <a href="https://github.com/reportify-ai/ragbase/releases" target="_blank" rel="noopener noreferrer">
                <Download className="h-5 w-5 mr-2" />
                Download Now
              </a>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
              <a href="https://github.com/reportify-ai/ragbase" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 mr-2" />
                View on GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">
              Powerful Features
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Everything you need for a complete local RAG system that prioritizes your privacy
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-8">
            <Shield className="h-16 w-16 text-blue-600 mx-auto mb-6" />
          </div>
          <h2 className="text-4xl font-bold mb-6 text-slate-900">
            Privacy by Design
          </h2>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Unlike cloud-based solutions, RAGBASE processes everything locally on your machine. 
            Your documents, queries, and insights never leave your device, ensuring complete privacy 
            and data sovereignty.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <Lock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Local Processing</h3>
              <p className="text-slate-600">All AI processing happens on your device</p>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No Data Collection</h3>
              <p className="text-slate-600">We don't collect or store any of your data</p>
            </div>
            <div className="text-center">
              <Cpu className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Offline Capable</h3>
              <p className="text-slate-600">Works completely offline with local models</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-slate-900 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Download RAGBASE today and start building your private knowledge base
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
              <a href="https://github.com/reportify-ai/ragbase/releases" target="_blank" rel="noopener noreferrer">
                <Download className="h-5 w-5 mr-2" />
                Download Latest Release
              </a>
            </Button>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
              <a href="https://github.com/reportify-ai/ragbase" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 mr-2" />
                Star on GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-slate-100 border-t">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <img src="./icon.png" alt="RAGBASE Logo" className="h-6 w-6" />
            <span className="text-lg font-bold bg-gradient-to-r from-[#016CD7] via-[#0168D5] to-[#1E40AF] bg-clip-text text-transparent">
              RAGBASE
            </span>
          </div>
          <p className="text-slate-600">
            Open source • Privacy-first • Built with ❤️ for the community
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
