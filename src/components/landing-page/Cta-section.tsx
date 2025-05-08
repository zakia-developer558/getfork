export default function CTASection() {
  return (
    <section className="w-full bg-white py-12 md:py-16"> {/* Reduced from py-16 md:py-24 */}
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Bricolage Grotesque'}}>Start Free Today</h2> {/* Reduced mb-6 to mb-4 */}
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6"> {/* Reduced mb-8 to mb-6 */}
          Install the GetFork AI Assistant on your website in minutes.
          <br />
          No code. No risk. Just smarter ordering—and
          <br />
          more happy, loyal customers.
        </p>
      </div>
    </section>
  );
}