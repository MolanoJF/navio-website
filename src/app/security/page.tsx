import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckIcon, Shield, Lock, Eye, Users, FileCheck } from "lucide-react";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const securityFeatures = [
  {
    icon: <Shield className="h-6 w-6" />,
    title: "SOC 2 Type II Compliance",
    description: "Enterprise-grade security with annual audits and continuous monitoring"
  },
  {
    icon: <Lock className="h-6 w-6" />,
    title: "End-to-End Encryption",
    description: "All data is encrypted in transit and at rest using industry-standard protocols"
  },
  {
    icon: <Eye className="h-6 w-6" />,
    title: "Privacy by Design",
    description: "Built with privacy-first principles and GDPR compliance"
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Role-Based Access Control",
    description: "Granular permissions and audit trails for all user actions"
  },
  {
    icon: <FileCheck className="h-6 w-6" />,
    title: "Regular Security Audits",
    description: "Third-party penetration testing and vulnerability assessments"
  }
];

const complianceStandards = [
  "SOC 2 Type II",
  "GDPR",
  "CCPA",
  "HIPAA Ready",
  "ISO 27001",
  "FedRAMP (In Progress)"
];

export default function SecurityPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 md:px-6 2xl:max-w-[1400px] py-24 lg:py-32">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Security & Compliance
          </h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto text-muted-foreground">
            Enterprise-grade security that keeps your data safe and your users protected. 
            Built for the most demanding compliance requirements.
          </p>
        </div>

        {/* Security Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {securityFeatures.map((feature, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Compliance Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Industry Standards & Compliance
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              SAIL meets and exceeds the highest security standards in the industry, 
              ensuring your data is protected at every level.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {complianceStandards.map((standard, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="font-medium">{standard}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Security Architecture */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Security Architecture
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our multi-layered security approach ensures comprehensive protection 
              for your application and user data.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Data Protection</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-green-500" />
                    AES-256 encryption for data at rest
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-green-500" />
                    TLS 1.3 for data in transit
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-green-500" />
                    Secure key management with AWS KMS
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Access Control</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-green-500" />
                    Multi-factor authentication (MFA)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-green-500" />
                    Single sign-on (SSO) integration
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-green-500" />
                    IP whitelisting and geofencing
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-muted/30 p-8 rounded-2xl">
              <div className="space-y-6">
                <div className="text-center">
                  <Shield className="h-16 w-16 mx-auto text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Security First</h3>
                  <p className="text-muted-foreground">
                    Every feature is built with security in mind, from the ground up.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                    <span className="text-sm font-medium">Vulnerability Scanning</span>
                    <Badge variant="secondary">Daily</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                    <span className="text-sm font-medium">Penetration Testing</span>
                    <Badge variant="secondary">Quarterly</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                    <span className="text-sm font-medium">Security Audits</span>
                    <Badge variant="secondary">Annual</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to secure your application?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get started with SAIL today and experience enterprise-grade security.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8 py-4 text-lg">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg">
              Schedule Security Review
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
