import { PublicNavigation } from "@/components/customs/public-navigation";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, BarChart3 } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <PublicNavigation />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 py-20 px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Cliniqly</h1>
        <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto">
          The modern, AI-powered clinic appointment & patient management system. 
          Streamline your workflow, delight your patients, and grow your practice.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <a href="#pricing">Get Started</a>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <a href="/about">Learn More</a>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Cliniqly?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
              <CardTitle className="text-lg mb-2">AI-Powered Scheduling</CardTitle>
              <p className="text-gray-600">
                Automate appointment booking, reminders, and follow-ups with smart AI tools.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <CardTitle className="text-lg mb-2">Patient Management</CardTitle>
              <p className="text-gray-600">
                Centralize patient records, history, and communication in one secure place.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-6 h-6 text-purple-600" />
              </div>
              <CardTitle className="text-lg mb-2">Analytics & Insights</CardTitle>
              <p className="text-gray-600">
                Track clinic performance, patient satisfaction, and revenue with real-time dashboards.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Simple, Transparent Pricing</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-2 border-blue-500">
            <CardContent className="text-center p-6">
              <div className="mb-4">
                <h3 className="text-xl font-bold mb-2">Starter</h3>
                <p className="text-gray-600 text-sm">For solo practitioners</p>
              </div>
              <div className="text-3xl font-bold mb-2">$19<span className="text-base font-normal">/mo</span></div>
              <ul className="mb-6 text-sm text-gray-600 space-y-2">
                <li>✓ Up to 100 patients</li>
                <li>✓ Unlimited appointments</li>
                <li>✓ Email support</li>
                <li>✓ Basic analytics</li>
              </ul>
              <Button asChild>
                <a href="/client/register">Start Free Trial</a>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-green-500 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <Badge variant="default">Most Popular</Badge>
            </div>
            <CardContent className="text-center p-6">
              <div className="mb-4">
                <h3 className="text-xl font-bold mb-2">Clinic</h3>
                <p className="text-gray-600 text-sm">For growing clinics</p>
              </div>
              <div className="text-3xl font-bold mb-2">$49<span className="text-base font-normal">/mo</span></div>
              <ul className="mb-6 text-sm text-gray-600 space-y-2">
                <li>✓ Up to 1,000 patients</li>
                <li>✓ Team access</li>
                <li>✓ SMS & email reminders</li>
                <li>✓ Priority support</li>
                <li>✓ Advanced analytics</li>
              </ul>
              <Button asChild>
                <a href="/client/register">Start Free Trial</a>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-purple-500">
            <CardContent className="text-center p-6">
              <div className="mb-4">
                <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                <p className="text-gray-600 text-sm">For large practices</p>
              </div>
              <div className="text-3xl font-bold mb-2">Custom</div>
              <ul className="mb-6 text-sm text-gray-600 space-y-2">
                <li>✓ Unlimited patients</li>
                <li>✓ Custom integrations</li>
                <li>✓ Dedicated support</li>
                <li>✓ White-label options</li>
                <li>✓ API access</li>
              </ul>
              <Button asChild>
                <a href="/contact">Contact Sales</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <p className="mb-4 text-gray-600">
                &ldquo;Cliniqly has transformed our clinic&apos;s workflow. Patients love the online booking and reminders!&rdquo;
              </p>
              <div className="font-semibold">— Dr. A. Smith, Family Clinic</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <p className="mb-4 text-gray-600">
                &ldquo;The analytics dashboard gives us real insight into our growth and patient satisfaction.&rdquo;
              </p>
              <div className="font-semibold">— Dr. L. Chen, Wellness Center</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to modernize your clinic?</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Join thousands of healthcare providers who trust Cliniqly to manage their practice.
        </p>
        <Button size="lg" asChild>
          <a href="/client/register">Get Started Today</a>
        </Button>
      </section>
    </div>
  );
}
