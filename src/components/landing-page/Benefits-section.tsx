import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function BenefitsSection() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-16 md:py-24">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center max-w-3xl mx-auto" style={{ fontFamily: 'Bricolage Grotesque'}}>
        GetFork helps restaurants increase revenue by guiding customers at the moment they're most likely to
        leave—before they order.
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12 text-center">
        Disconnected menus and unanswered questions lead to confusion and missed sales. We help you turn that
        uncertainty into action, with real-time guidance that builds trust and drives orders.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-green-50">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-green-700">+18%</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              Increase in conversion rate.
              <br />
              Customers are far more likely to order when they feel confident in their choice.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-pink-50">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-pink-700">+61%</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              Faster decision-making
              <br />
              Real-time answers and filtering reduce hesitation and drive quicker orders.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-purple-50">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-purple-700">+26%</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              Higher average order value
              <br />
              Relevant suggestions and smart upsells boost the total at checkout.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-yellow-50">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-yellow-800">Customer insight, built-in</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              Every interaction is a new data point. Customer questions turn into actionable data for loyalty, marketing,
              and menu optimization.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
