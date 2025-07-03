import { PublicNavigation } from "@/components/customs/public-navigation";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <PublicNavigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 py-20 px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">About Cliniqly</h1>
        <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto">
          Revolutionizing healthcare management with modern technology and AI-powered solutions.
        </p>
      </section>

      {/* Mission Section */}
      <section className="max-w-4xl mx-auto py-16 px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            To empower healthcare providers with intuitive, efficient, and secure tools that enhance patient care 
            and streamline clinic operations. We believe every healthcare provider deserves technology that works as hard as they do.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="max-w-4xl mx-auto py-16 px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded by healthcare professionals and technology experts, Cliniqly was born from a simple observation: 
              too many clinics were struggling with outdated, complex systems that slowed down their work instead of helping.
            </p>
            <p className="text-gray-600 mb-4">
              We set out to create a solution that would be as intuitive as the apps we use in our daily lives, 
              but powerful enough to handle the complex needs of modern healthcare.
            </p>
            <p className="text-gray-600">
              Today, Cliniqly serves thousands of healthcare providers across the country, helping them focus on what matters most: their patients.
            </p>
          </div>
          <Card>
            <CardContent className="p-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <CardTitle className="text-xl mb-2">Fast & Reliable</CardTitle>
                <p className="text-gray-600">Built for speed and reliability, ensuring your clinic runs smoothly.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <CardTitle className="text-lg mb-2">Trust & Security</CardTitle>
                <p className="text-gray-600">
                  Your data security is our top priority. We use enterprise-grade encryption and follow strict healthcare compliance standards.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <CardTitle className="text-lg mb-2">Patient-First</CardTitle>
                <p className="text-gray-600">
                  Everything we build is designed to improve patient care and enhance the patient experience.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <CardTitle className="text-lg mb-2">Innovation</CardTitle>
                <p className="text-gray-600">
                  We continuously innovate to bring you the latest technology that makes healthcare management easier and more efficient.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="text-center p-6">
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <CardTitle className="text-lg mb-1">Dr. Sarah Johnson</CardTitle>
              <p className="text-gray-600 mb-2">CEO & Co-Founder</p>
              <p className="text-sm text-gray-500">
                Former family physician with 15+ years of experience in healthcare technology.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="text-center p-6">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <CardTitle className="text-lg mb-1">Michael Chen</CardTitle>
              <p className="text-gray-600 mb-2">CTO & Co-Founder</p>
              <p className="text-sm text-gray-500">
                Software engineer with expertise in healthcare systems and AI applications.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16 px-4 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to join us?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Start your journey with Cliniqly and transform your clinic operations today.
        </p>
        <Button size="lg" variant="secondary" asChild>
          <a href="/client/register">Get Started Free</a>
        </Button>
      </section>
    </div>
  );
} 