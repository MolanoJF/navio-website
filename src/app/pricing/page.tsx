import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CheckIcon, MinusIcon } from "lucide-react";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface PlanFeature {
  feature: string;
  starter: boolean;
  growth: boolean;
  enterprise: boolean;
}

const planFeatures: PlanFeature[] = [
  {
    feature: "Guided Users per month",
    starter: true,
    growth: true,
    enterprise: true,
  },
  {
    feature: "Interactive Guidance",
    starter: true,
    growth: true,
    enterprise: true,
  },
  {
    feature: "Autonomous Actions",
    starter: false,
    growth: true,
    enterprise: true,
  },
  {
    feature: "Core Analytics Dashboard",
    starter: false,
    growth: true,
    enterprise: true,
  },
  {
    feature: "Number of Agents",
    starter: true,
    growth: true,
    enterprise: true,
  },
  {
    feature: "Community Support",
    starter: true,
    growth: false,
    enterprise: false,
  },
  {
    feature: "Email & Chat Support",
    starter: false,
    growth: true,
    enterprise: false,
  },
  {
    feature: "Dedicated Success Manager",
    starter: false,
    growth: false,
    enterprise: true,
  },
  {
    feature: "Advanced Security & Compliance",
    starter: false,
    growth: false,
    enterprise: true,
  },
  {
    feature: "Product Insight Engine",
    starter: false,
    growth: false,
    enterprise: true,
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 md:px-6 2xl:max-w-[1400px] py-24 lg:py-32">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Simple, transparent pricing that scales with you.
          </h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto text-muted-foreground">
            Choose the perfect plan for your needs. Start free and scale as you grow.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Starter Plan */}
          <Card className="relative">
            <CardHeader>
              <CardTitle>Starter</CardTitle>
              <CardDescription>
                For individuals and early projects exploring interactive guidance.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold">Free</div>
              </div>
              
              {/* CTA Button moved here */}
              <Button className="w-full" variant="outline" asChild>
                <a href="https://demo.naviobot.com">
                  Start for Free
                </a>
              </Button>
              
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckIcon className="h-5 w-5 text-green-500" />
                  <span>Up to 250 Guided Users / mo</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon className="h-5 w-5 text-green-500" />
                  <span>Interactive Guidance ("Show Me")</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon className="h-5 w-5 text-green-500" />
                  <span>1 Agent</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon className="h-5 w-5 text-green-500" />
                  <span>Community Support</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Growth Plan - Highlighted */}
          <Card className="relative border-2 border-primary shadow-lg scale-105">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-primary text-primary-foreground">
                Most Popular
              </Badge>
            </div>
            <CardHeader>
              <CardTitle>Growth</CardTitle>
              <CardDescription>
                For startups and teams ready to activate and retain their users.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold">$99</div>
                <div className="text-muted-foreground">/ mo</div>
              </div>
              
              {/* CTA Button moved here */}
              <Button className="w-full" asChild>
                <a href="https://demo.naviobot.com">
                  Choose Growth
                </a>
              </Button>
              
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckIcon className="h-5 w-5 text-green-500" />
                  <span>Up to 2,000 Guided Users / mo</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon className="h-5 w-5 text-green-500" />
                  <span>Autonomous Actions ("Do It For Me")</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon className="h-5 w-5 text-green-500" />
                  <span>Core Analytics Dashboard</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon className="h-5 w-5 text-green-500" />
                  <span>Up to 5 Agents</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon className="h-5 w-5 text-green-500" />
                  <span>Email & Chat Support</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Enterprise Plan */}
          <Card className="relative">
            <CardHeader>
              <CardTitle>Enterprise</CardTitle>
              <CardDescription>
                For scaled companies requiring advanced security, insights, and unlimited potential.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold">Let's Talk</div>
              </div>
              
              {/* CTA Button moved here */}
              <Button className="w-full" variant="outline" asChild>
                <a href="https://demo.naviobot.com">
                  Contact Sales
                </a>
              </Button>
              
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckIcon className="h-5 w-5 text-green-500" />
                  <span>Unlimited Users & Actions</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon className="h-5 w-5 text-green-500" />
                  <span>Advanced Security & Compliance (SOC 2)</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon className="h-5 w-5 text-green-500" />
                  <span>Actionable Product Insight Engine</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon className="h-5 w-5 text-green-500" />
                  <span>Unlimited Agents</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon className="h-5 w-5 text-green-500" />
                  <span>Dedicated Success Manager</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Final CTA Section */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Have complex needs or high-volume traffic?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's design the perfect enterprise solution together.
          </p>
          <Button size="lg" className="px-8 py-4 text-lg" asChild>
            <a href="https://demo.naviobot.com">
              Build Your First Agent
            </a>
          </Button>
        </div>

        {/* Comparison Table */}
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Compare Plans</h2>
            <p className="text-muted-foreground">
              See how our plans stack up against each other
            </p>
          </div>
          
          <div className="rounded-lg border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[300px]">Feature</TableHead>
                  <TableHead className="text-center">Starter</TableHead>
                  <TableHead className="text-center">Growth</TableHead>
                  <TableHead className="text-center">Enterprise</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {planFeatures.map((feature, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{feature.feature}</TableCell>
                    <TableCell className="text-center">
                      {feature.starter ? (
                        <CheckIcon className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <MinusIcon className="h-5 w-5 text-muted-foreground mx-auto" />
                      )}
                    </TableCell>
                    <TableCell className="text-center">
                      {feature.growth ? (
                        <CheckIcon className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <MinusIcon className="h-5 w-5 text-muted-foreground mx-auto" />
                      )}
                    </TableCell>
                    <TableCell className="text-center">
                      {feature.enterprise ? (
                        <CheckIcon className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <MinusIcon className="h-5 w-5 text-muted-foreground mx-auto" />
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
