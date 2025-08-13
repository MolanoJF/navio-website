import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Eye, Lock, Users, FileText, Calendar } from "lucide-react";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const privacyPrinciples = [
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Data Minimization",
    description: "We only collect the data necessary to provide our services"
  },
  {
    icon: <Eye className="h-6 w-6" />,
    title: "Transparency",
    description: "Clear information about how we use and protect your data"
  },
  {
    icon: <Lock className="h-6 w-6" />,
    title: "Security First",
    description: "Enterprise-grade encryption and security measures"
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "User Control",
    description: "You have full control over your data and privacy settings"
  }
];

const dataCategories = [
  {
    category: "Account Information",
    description: "Email, name, company details for account management",
    retention: "Until account deletion"
  },
  {
    category: "Usage Data",
    description: "How you interact with our services and features",
    retention: "2 years, then anonymized"
  },
  {
    category: "Technical Data",
    description: "IP addresses, browser type, device information",
    retention: "90 days for security purposes"
  },
  {
    category: "Support Data",
    description: "Communications and files shared with our support team",
    retention: "3 years for service improvement"
  }
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 md:px-6 2xl:max-w-[1400px] py-24 lg:py-32">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto text-muted-foreground">
            Your privacy is fundamental to how we build and operate SAIL. 
            This policy explains how we collect, use, and protect your information.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>Last updated: December 2024</span>
          </div>
        </div>

        {/* Privacy Principles */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Our Privacy Principles
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do with your data
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {privacyPrinciples.map((principle, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    {principle.icon}
                  </div>
                  <CardTitle className="text-lg">{principle.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">
                    {principle.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Information We Collect */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Information We Collect
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We collect only the information necessary to provide our services and improve your experience
            </p>
          </div>
          
          <div className="space-y-4">
            {dataCategories.map((data, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl">{data.category}</CardTitle>
                  <CardDescription>{data.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Retention: {data.retention}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* How We Use Your Information */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              How We Use Your Information
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Your data helps us provide better services while maintaining your privacy
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Service Provision</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Deliver and maintain our AI-powered guidance services</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Process transactions and manage your account</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Provide customer support and respond to inquiries</span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Service Improvement</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Analyze usage patterns to improve our services</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Develop new features based on user feedback</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Ensure security and prevent fraud</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Data Sharing */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Data Sharing & Third Parties
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We never sell your personal data. We only share information when necessary and with your consent.
            </p>
          </div>
          
          <Card>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-red-600">We Never Share</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span>Personal data with advertisers</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span>Your information for marketing purposes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span>Data with third parties without consent</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-green-600">We May Share</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>With service providers under strict contracts</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>When required by law or legal process</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>With your explicit consent</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Your Rights */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Your Privacy Rights
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              You have full control over your personal information
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Access & Portability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Request a copy of your data or transfer it to another service
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Correction & Updates</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Update or correct inaccurate information in your account
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Deletion</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Request deletion of your account and associated data
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Opt-Out</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Unsubscribe from communications and marketing emails
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Data Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Limit how we process your data for specific purposes
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Complaints</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  File complaints with relevant data protection authorities
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact Information */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Questions About Your Privacy?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our privacy team is here to help. Contact us with any questions about your data or this policy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8 py-4 text-lg">
              Contact Privacy Team
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg">
              Download Privacy Policy
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
