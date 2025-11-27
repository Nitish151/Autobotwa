import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Zap, Users, Brain, BarChart3, MessageSquare, Sparkles, CheckCircle } from "lucide-react"

export const metadata = {
  title: "TaskFlow - AI Task Management",
  description:
    "Transform how your team works with AI-powered task management. Smart automation, real-time collaboration, and intelligent insights.",
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-accent" />
            <span className="font-semibold text-xl">TaskFlow</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition">
              Features
            </a>
            <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition">
              Testimonials
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition">
              Pricing
            </a>
          </div>
          <Button variant="outline" className="hidden sm:inline-flex bg-transparent">
            Sign In
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Grid background */}
        <div className="absolute inset-0 hero-grid opacity-10" />

        {/* Gradient orbs */}
        <div className="absolute top-20 -left-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 -right-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl opacity-30" />

        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">AI-Powered Task</span>
            <span className="block mt-2">Management for Teams</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Transform how your team works with intelligent task automation, real-time collaboration, and AI insights.
            Stay organized and ship faster than ever before.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Get Started Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline">
              Watch Demo
            </Button>
          </div>

          {/* Social proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8 border-t border-border">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">10K+</div>
              <div className="text-sm text-muted-foreground">Teams Using TaskFlow</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-border" />
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">4.9★</div>
              <div className="text-sm text-muted-foreground">Rated on Product Hunt</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-border" />
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime Guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Powerful Features Built for Scale</h2>
            <p className="text-xl text-muted-foreground">Everything you need to manage tasks, collaborate, and ship.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <Card className="bg-card border-border hover:border-accent transition group">
              <CardHeader>
                <Brain className="w-10 h-10 text-accent mb-3 group-hover:scale-110 transition" />
                <CardTitle>AI-Powered Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Let AI automatically prioritize, categorize, and suggest next steps for your tasks with intelligent
                  algorithms.
                </p>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="bg-card border-border hover:border-accent transition group">
              <CardHeader>
                <Users className="w-10 h-10 text-accent mb-3 group-hover:scale-110 transition" />
                <CardTitle>Real-Time Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Work seamlessly with your team. See updates instantly, leave comments, and stay in sync across all
                  devices.
                </p>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="bg-card border-border hover:border-accent transition group">
              <CardHeader>
                <BarChart3 className="w-10 h-10 text-accent mb-3 group-hover:scale-110 transition" />
                <CardTitle>Advanced Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Get actionable insights with detailed analytics. Track productivity, velocity, and team performance
                  metrics.
                </p>
              </CardContent>
            </Card>

            {/* Feature 4 */}
            <Card className="bg-card border-border hover:border-accent transition group">
              <CardHeader>
                <Zap className="w-10 h-10 text-accent mb-3 group-hover:scale-110 transition" />
                <CardTitle>Lightning Fast</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Built for speed. Load your tasks instantly and manage hundreds of projects without lag or slowdowns.
                </p>
              </CardContent>
            </Card>

            {/* Feature 5 */}
            <Card className="bg-card border-border hover:border-accent transition group">
              <CardHeader>
                <MessageSquare className="w-10 h-10 text-accent mb-3 group-hover:scale-110 transition" />
                <CardTitle>Integrated Chat</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Discuss tasks without leaving the app. Built-in messaging keeps conversations organized and
                  searchable.
                </p>
              </CardContent>
            </Card>

            {/* Feature 6 */}
            <Card className="bg-card border-border hover:border-accent transition group">
              <CardHeader>
                <CheckCircle className="w-10 h-10 text-accent mb-3 group-hover:scale-110 transition" />
                <CardTitle>Enterprise Ready</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  SSO, advanced permissions, audit logs, and compliance certifications for enterprise deployments.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Loved by Teams Worldwide</h2>
            <p className="text-xl text-muted-foreground">See what customers are saying about TaskFlow</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <Card className="bg-card border-border">
              <CardHeader>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-accent">
                      ★
                    </span>
                  ))}
                </div>
                <CardTitle className="text-lg">Game changer for our workflow</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">
                  "TaskFlow completely transformed how our team manages projects. The AI suggestions alone save us hours
                  every week. Can't imagine going back."
                </p>
                <div className="pt-3 border-t border-border">
                  <p className="font-semibold">Sarah Chen</p>
                  <p className="text-sm text-muted-foreground">CEO, Design Studio Co</p>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="bg-card border-border">
              <CardHeader>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-accent">
                      ★
                    </span>
                  ))}
                </div>
                <CardTitle className="text-lg">Best task management tool we've used</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">
                  "We've tried everything. TaskFlow is the first tool that actually makes sense. The interface is
                  intuitive and the team collaboration features are excellent."
                </p>
                <div className="pt-3 border-t border-border">
                  <p className="font-semibold">Marcus Rodriguez</p>
                  <p className="text-sm text-muted-foreground">Product Lead, Tech Startup</p>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 3 */}
            <Card className="bg-card border-border">
              <CardHeader>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-accent">
                      ★
                    </span>
                  ))}
                </div>
                <CardTitle className="text-lg">Incredible customer support</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">
                  "The AI automation features are impressive, but what really stands out is how responsive and helpful
                  the TaskFlow team is. Outstanding support!"
                </p>
                <div className="pt-3 border-t border-border">
                  <p className="font-semibold">Emma Wilson</p>
                  <p className="text-sm text-muted-foreground">Operations Manager, Global Corp</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-muted-foreground">Choose the plan that fits your team</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Starter Plan */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Starter</CardTitle>
                <CardDescription>Perfect for small teams</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <span className="text-4xl font-bold">$29</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>Up to 10 users</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>Unlimited tasks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>Basic AI features</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>Email support</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full bg-transparent">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* Professional Plan */}
            <Card className="bg-accent/10 border-accent relative">
              <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                Popular
              </div>
              <CardHeader>
                <CardTitle>Professional</CardTitle>
                <CardDescription>For growing teams</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <span className="text-4xl font-bold">$79</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>Up to 50 users</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>Unlimited tasks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>Advanced AI features</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>Custom integrations</span>
                  </li>
                </ul>
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">Get Started</Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Enterprise</CardTitle>
                <CardDescription>For large organizations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <span className="text-4xl font-bold">Custom</span>
                  <span className="text-muted-foreground block">Contact sales</span>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>Unlimited users</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>Unlimited tasks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>Full AI suite</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>24/7 dedicated support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>SSO & compliance</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full bg-transparent">
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center bg-card border border-accent/30 rounded-2xl p-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Ready to Transform Your Workflow?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of teams already using TaskFlow to work smarter and ship faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-accent" />
                <span className="font-semibold">TaskFlow</span>
              </div>
              <p className="text-sm text-muted-foreground">AI-powered task management for teams</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Security
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Roadmap
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    API Reference
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Integrations
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Support
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    GDPR
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2025 TaskFlow. All rights reserved.</p>
            <div className="flex gap-6 mt-4 sm:mt-0">
              <a href="#" className="hover:text-foreground transition">
                Twitter
              </a>
              <a href="#" className="hover:text-foreground transition">
                GitHub
              </a>
              <a href="#" className="hover:text-foreground transition">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
