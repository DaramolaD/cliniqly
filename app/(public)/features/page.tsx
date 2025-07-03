import { PublicNavigation } from "@/components/customs/public-navigation";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white">
      <PublicNavigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 py-20 px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Features</h1>
        <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto">
          Everything you need to run a modern, efficient clinic. Built by healthcare professionals, for healthcare professionals.
        </p>
      </section>

      {/* Main Features Grid */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Appointment Management */}
          <Card>
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <CardTitle className="text-lg mb-2">Smart Scheduling</CardTitle>
              <p className="text-gray-600 mb-4">
                AI-powered appointment booking with intelligent time slot suggestions and conflict detection.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Online booking portal</li>
                <li>• Automated reminders</li>
                <li>• Waitlist management</li>
                <li>• Recurring appointments</li>
              </ul>
            </CardContent>
          </Card>

          {/* Patient Management */}
          <Card>
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <CardTitle className="text-lg mb-2">Patient Records</CardTitle>
              <p className="text-gray-600 mb-4">
                Comprehensive patient management with secure, HIPAA-compliant record keeping.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Digital patient profiles</li>
                <li>• Medical history tracking</li>
                <li>• Document storage</li>
                <li>• Insurance information</li>
              </ul>
            </CardContent>
          </Card>

          {/* Communication */}
          <Card>
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <CardTitle className="text-lg mb-2">Patient Communication</CardTitle>
              <p className="text-gray-600 mb-4">
                Multi-channel communication tools to keep patients informed and engaged.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• SMS & email notifications</li>
                <li>• Patient portal</li>
                <li>• Secure messaging</li>
                <li>• Automated follow-ups</li>
              </ul>
            </CardContent>
          </Card>

          {/* Analytics */}
          <Card>
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <CardTitle className="text-lg mb-2">Analytics & Reporting</CardTitle>
              <p className="text-gray-600 mb-4">
                Powerful insights to help you understand and improve your clinic&apos;s performance.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Revenue tracking</li>
                <li>• Patient satisfaction</li>
                <li>• Appointment analytics</li>
                <li>• Custom reports</li>
              </ul>
            </CardContent>
          </Card>

          {/* Billing */}
          <Card>
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <CardTitle className="text-lg mb-2">Billing & Payments</CardTitle>
              <p className="text-gray-600 mb-4">
                Streamlined billing process with integrated payment processing and insurance management.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Automated invoicing</li>
                <li>• Payment processing</li>
                <li>• Insurance claims</li>
                <li>• Financial reporting</li>
              </ul>
            </CardContent>
          </Card>

          {/* Security */}
          <Card>
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <CardTitle className="text-lg mb-2">Security & Compliance</CardTitle>
              <p className="text-gray-600 mb-4">
                Enterprise-grade security with full HIPAA compliance and data protection.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• HIPAA compliant</li>
                <li>• End-to-end encryption</li>
                <li>• Regular backups</li>
                <li>• Audit trails</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Advanced Features Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Advanced Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <CardTitle className="text-lg mb-4">AI-Powered Insights</CardTitle>
                <ul className="space-y-2 text-gray-600">
                  <li>• Predictive appointment scheduling</li>
                  <li>• Patient no-show prediction</li>
                  <li>• Automated follow-up recommendations</li>
                  <li>• Smart resource allocation</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <CardTitle className="text-lg mb-4">Integration Capabilities</CardTitle>
                <ul className="space-y-2 text-gray-600">
                  <li>• Electronic Health Records (EHR)</li>
                  <li>• Practice management systems</li>
                  <li>• Payment processors</li>
                  <li>• Calendar applications</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <CardTitle className="text-lg mb-4">Mobile Access</CardTitle>
                <ul className="space-y-2 text-gray-600">
                  <li>• iOS and Android apps</li>
                  <li>• Offline functionality</li>
                  <li>• Push notifications</li>
                  <li>• Mobile check-in</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <CardTitle className="text-lg mb-4">Team Management</CardTitle>
                <ul className="space-y-2 text-gray-600">
                  <li>• Role-based access control</li>
                  <li>• Staff scheduling</li>
                  <li>• Performance tracking</li>
                  <li>• Team collaboration tools</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16 px-4 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to experience these features?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Start your free trial today and see how Cliniqly can transform your clinic operations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" asChild>
            <a href="/client/register">Start Free Trial</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="/contact">Schedule Demo</a>
          </Button>
        </div>
      </section>
    </div>
  );
} 