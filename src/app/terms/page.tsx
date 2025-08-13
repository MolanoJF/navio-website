import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Shield, Users, AlertTriangle, CheckCircle, Calendar } from "lucide-react";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const keyTerms = [
  {
    icon: <Users className="h-6 w-6" />,
    title: "Acceptance",
    description: "By using SAIL, you agree to these terms and conditions"
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Service Description",
    description: "AI-powered guidance and automation services for applications"
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: "User Responsibilities",
    description: "Proper use of services and compliance with applicable laws"
  },
  {
    icon: <CheckCircle className="h-6 w-6" />,
    title: "Intellectual Property",
    description: "Respect for SAIL's and third-party intellectual property rights"
  }
];

const serviceTerms = [
  {
    category: "Account Creation",
    description: "You must provide accurate information and maintain account security",
    requirements: ["Valid email address", "Secure password", "Company information"]
  },
  {
    category: "Acceptable Use",
    description: "Services must be used for lawful purposes only",
    requirements: ["No illegal activities", "No system abuse", "Respect for others"]
  },
  {
    category: "Data & Privacy",
    description: "Compliance with our privacy policy and data protection laws",
    requirements: ["Consent for data processing", "No unauthorized sharing", "Data accuracy"]
  },
  {
    category: "Service Limitations",
    description: "Understanding of service availability and technical constraints",
    requirements: ["No guaranteed uptime", "Feature availability", "Technical support"]
  }
];

const prohibitedActivities = [
  "Attempting to reverse engineer or hack our services",
  "Using services for illegal or unauthorized purposes",
  "Interfering with other users' access to services",
  "Attempting to gain unauthorized access to our systems",
  "Using services to transmit malware or harmful code",
  "Violating intellectual property rights of others",
  "Engaging in any form of harassment or abuse",
  "Attempting to circumvent usage limits or restrictions"
];

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 md:px-6 2xl:max-w-[1400px] py-24 lg:py-32">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Terms of Service
          </h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto text-muted-foreground">
            These terms govern your use of SAIL's services. By using our platform, 
            you agree to be bound by these terms and conditions.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>Last updated: December 2024</span>
          </div>
        </div>

        {/* Key Terms Overview */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Key Terms Overview
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Important terms that govern your relationship with SAIL
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyTerms.map((term, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    {term.icon}
                  </div>
                  <CardTitle className="text-lg">{term.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">
                    {term.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Service Terms */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Service Terms & Conditions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Detailed terms that apply to your use of our services
            </p>
          </div>
          
          <div className="space-y-6">
            {serviceTerms.map((service, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl">{service.category}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm text-muted-foreground">Requirements:</h4>
                    <ul className="space-y-1">
                      {service.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Prohibited Activities */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Prohibited Activities
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Activities that are not allowed when using our services
            </p>
          </div>
          
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-6 w-6 text-red-500" />
                <CardTitle className="text-xl text-red-600">What You Cannot Do</CardTitle>
              </div>
              <CardDescription>
                Violation of these terms may result in account suspension or termination
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {prohibitedActivities.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-red-50 dark:bg-red-950/20 rounded-lg">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm">{activity}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Payment & Billing */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Payment & Billing Terms
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Important information about pricing, billing, and payment terms
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Billing & Subscriptions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-medium">Free Tier</h4>
                  <p className="text-sm text-muted-foreground">
                    No credit card required. Access to basic features with usage limits.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Paid Plans</h4>
                  <p className="text-sm text-muted-foreground">
                    Monthly or annual billing. Automatic renewal unless cancelled.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Usage Limits</h4>
                  <p className="text-sm text-muted-foreground">
                    Plans include specific user and action limits. Overage charges may apply.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Refunds & Cancellations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-medium">Cancellation</h4>
                  <p className="text-sm text-muted-foreground">
                    Cancel anytime through your account settings. No long-term commitments.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Refunds</h4>
                  <p className="text-sm text-muted-foreground">
                    Pro-rated refunds for annual plans. Monthly plans are non-refundable.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Data Retention</h4>
                  <p className="text-sm text-muted-foreground">
                    Your data is retained for 30 days after cancellation for recovery purposes.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Intellectual Property */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Intellectual Property Rights
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Understanding who owns what in our relationship
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">SAIL's Rights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  SAIL retains all rights to our platform, software, and intellectual property.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Platform and software code</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Brand names and trademarks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Documentation and training materials</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Your Rights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  You retain ownership of your content and data.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Your business data and content</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Custom configurations and workflows</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Feedback and suggestions you provide</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Limitation of Liability */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Limitation of Liability
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Important legal limitations on our liability to you
            </p>
          </div>
          
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4 text-muted-foreground">
                <p>
                  SAIL provides its services "as is" and "as available." We do not guarantee that our services will be uninterrupted, secure, or error-free.
                </p>
                <p>
                  Our total liability to you for any claims arising from the use of our services is limited to the amount you paid us in the 12 months preceding the claim.
                </p>
                <p>
                  We are not liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities.
                </p>
                <p>
                  These limitations do not apply to claims for personal injury or property damage caused by our gross negligence or willful misconduct.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact & Support */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Questions About These Terms?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our legal team is here to help clarify any questions about these terms of service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8 py-4 text-lg">
              Contact Legal Team
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg">
              Download Terms of Service
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
