import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CallToAction() {
  return (
    <section className="py-40 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Software that drives itself.</h2>
          <p className="text-muted-foreground text-lg mb-8">
          Let Sailbot guide, act, and automate—so your users never feel lost again.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <Link href="/dashboard">
                try Now
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
