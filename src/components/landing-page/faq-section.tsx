import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqSection() {
  const faqs: FaqItem[] = [
    {
      question: "Lorem ipsum dolor st amet consectetur?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Tempus lectus suspendisse iaculis mattis risus quis. Sodales adipiscing pharetra sed quis. Enim eget nunc. Dignissim nunc sed enim. Nunc vitae adipiscing nunc quis. Dignissim vitae eros lobortis adipiscing odio pellentesque a. Nunc in mi faucibus dignissim mauris.",
    },
    {
      question: "Lorem erosconsectetur?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Tempus lectus suspendisse iaculis mattis risus quis. Sodales adipiscing pharetra sed quis.",
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Tempus lectus suspendisse iaculis mattis risus quis. Sodales adipiscing pharetra sed quis.",
    },
    {
      question: "Lorem ipsum consectetur?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Tempus lectus suspendisse iaculis mattis risus quis. Sodales adipiscing pharetra sed quis.",
    },
    {
      question: "Sollicitudin consequat molestie?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Tempus lectus suspendisse iaculis mattis risus quis. Sodales adipiscing pharetra sed quis.",
    },
    {
      question: "Sollicitudin consequat molestie nulla adipiscing?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Tempus lectus suspendisse iaculis mattis risus quis. Sodales adipiscing pharetra sed quis.",
    },
  ];

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-[300px_1fr] gap-8 md:gap-16">
          <div>
            <h2 className="text-3xl font-bold" style={{ fontFamily: 'Bricolage Grotesque'}}>Frequently asked questions</h2>
          </div>
          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`}>
                  <AccordionTrigger className="text-[18px]">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-[16px]">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            
          </div>
        </div>
      </div>
    </section>
  );
}
