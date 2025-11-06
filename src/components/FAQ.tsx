import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faq = [
  {
    question: "What is your return policy?",
    answer:
      "You can return unused items in their original packaging within 30 days for a refund or exchange. Contact support for assistance.",
  },
  {
    question: "How do I track my order?",
    answer:
      "Track your order using the link provided in your confirmation email, or log into your account to view tracking details.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes, we ship worldwide. Shipping fees and delivery times vary by location, and customs duties may apply for some countries.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept Visa, MasterCard, American Express, PayPal, Apple Pay, and Google Pay, ensuring secure payment options for all customers.",
  },
  {
    question: "What if I receive a damaged item?",
    answer:
      "Please contact our support team within 48 hours of delivery with photos of the damaged item. We'll arrange a replacement or refund.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white transition-colors duration-300">
              Frequently Asked <br /> Questions
            </h2>
          </div>

          <div className="text-left">
            <Accordion type="single" defaultValue="question-0" className="w-full">
              {faq.map(({ question, answer }, index) => (
                <AccordionItem key={question} value={`question-${index}`}>
                  <AccordionTrigger className="text-left text-lg text-white hover:text-white/80">
                    {question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    {answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
