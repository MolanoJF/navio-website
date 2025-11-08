"use client"

import { motion } from "motion/react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { FadeIn } from "@/components/ui/animated"

const faq = [
  {
    question: "How is Navio different from product tours or support chatbots?",
    answer:
      "Unlike passive product tours that only point to features, Navio actively guides user step-by-step or automates entire workflows in real time. It's not a chatbot; it’s an expert co-pilot that works directly inside your application.",
  },
  {
    question: "What can Navio do inside our application?",
    answer:
      "Navio can: Guide users with real-time visual instructions and context. Automate routine workflows end-to-end. Surface contextual help from your docs. Capture insights on friction points and user intent.",
  },
  {
    question: "How does Navio integrate with our product?",
    answer:
      "Add a single JavaScript snippet, and Navio automatically maps your interface. It works with React, Vue, Angular, Next.js, and other modern frameworks. No backend changes required, no complex SDK, no engineering bottleneck.",
  },
  {
    question: "How long does it take to set up?",
    answer:
      "Most teams embed Navio in under an hour. You can go live with your first guided flow the same day.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-30 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <FadeIn>
            <div className="text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6 mt-4 font-bold text-white transition-colors duration-300">
                Frequently Asked <br /> Questions
              </h2>
              <p className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed text-white opacity-70 transition-colors duration-300">
            Everything product and engineering teams <br />  need to know before getting started.
            </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="text-left">
              <Accordion type="single" defaultValue="question-0" className="w-full">
                {faq.map(({ question, answer }, index) => (
                  <motion.div
                    key={question}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.2,
                      ease: "easeOut",
                    }}
                  >
                    <AccordionItem value={`question-${index}`}>
                      <AccordionTrigger className="text-left text-lg font-light text-white hover:text-white/80">
                        {question}
                      </AccordionTrigger>
                      <AccordionContent className="text-base text-muted-foreground">
                        {answer}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
