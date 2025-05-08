
export default function CustomerQuestionsSection() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-16 md:py-24 text-center -mt-22">
      <div className="text-orange-500 font-medium mb-2">Meet Your AI Dietary Assistant</div>
      <h2 className="text-3xl md:text-4xl font-bold mb-6 max-w-3xl mx-auto" style={{ fontFamily: 'Bricolage Grotesque'}}>
        Every day, customers leave your site with unanswered questions like:
      </h2>
      <div className="max-w-2xl mx-auto mb-8">
        <p className="text-lg mb-2">"Is this gluten-free?"</p>
        <p className="text-lg mb-2">"Do you have halal options?"</p>
        <p className="text-lg mb-6">"Can I make this spicy?"</p>

        <p className="text-lg text-gray-600">
          In fact, over 60% of diners ask about dietary needs before placing an order. If they can't find quick answers,
          they often leave without buying.
        </p>
      </div>
    </section>
  );
}
