import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CallToAction() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-card rounded-lg border shadow-sm p-12">
            <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Join thousands of users who've already made the switch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                <Link href="/dashboard">
                  View Dashboard
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-muted-foreground/20">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
