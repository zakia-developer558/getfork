import { Button } from "@/components/ui/button";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen relative">
      {/* Background gradient */}
      <div className="absolute top-0 left-0 right-0 h-[300px] bg-gradient-to-b from-[#FFF8F5] to-white -z-10" />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-3xl">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-1" style={{ fontFamily: 'Bricolage Grotesque'}}>Terms and Conditions</h1>
          <p className="text-sm text-muted-foreground">Last updated May 9, 2023</p>
        </header>

        <section className="space-y-6 text-muted-foreground">
          <p>
            Lorem ipsum dolor sit amet consectetur. Velit purus scelerisque convallis viverra et a malesuada elit
            congue sodales pulvinar phaselius ultrices et lacinia tincidunt aliquam. At cursus.
          </p>

          <ArticleSection title="Phaselius ultrice">
            Lorem ipsum dolor sit amet consectetur. Velit purus scelerisque convallis viverra et a malesuada elit t. Id
            phaselius ultrices et lacinia tincidunt aliquam. At cursus.
          </ArticleSection>

          <p>
            Lorem ipsum dolor sit amet consectetur. Velit purus scelerisque convallis viverra et a malesuada elit. Id
            phaselius ultrices etiam in enim fermentum gravida quis porta. Aliquet et ac aliquet risus sodales
            porttitor congue sodales pulvinar. Egestas tempor id ultrices et sollicitudin mi. Ultrices neque pharetra
            leo. Fames et cras enim nunc amet venenatis. Eger id vitae lacinia leo nam imperdiet ac volutpat. Risus
            semper lacinia tincidunt aliquam. At cursus enim id.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur. Velit purus scelerisque convallis viverra et a malesuada elit. Id
            phaselius ultrices etiam in enim fermentum gravida quis porta. Aliquet et ac aliquet risus sodales
            porttitor congue sodales pulvinar. Egestas tempor id.
          </p>

          <ArticleSection title="Lorem ipsum dolor sit amet conse">
            Lorem ipsum dolor sit amet consectetur. Velit purus scelerisque convallis viverra et a malesuada elit. Id
            phaselius ultrices etiam in enim fermentum gravida quis porta. Aliquet et ac aliquet risus sodales
            porttitor congue sodales pulvinar. Egestas tempor id ultrices et sollicitudin mi. Ultrices neque pharetra
            leo. Fames et cras enim nunc amet venenatis. Eger id vitae.
          </ArticleSection>

          <ArticleSection title="Lorem ipsum dolor sit amet consectetur. Velit purus scelerisque con">
            Lorem ipsum dolor sit amet consectetur. Velit purus scelerisque convallis viverra et a malesuada elit. Id
            phaselius ultrices etiam in enim fermentum gravida quis porta. Aliquet et ac aliquet risus sodales
            porttitor congue sodales pulvinar. Egestas tempor id ultrices et sollicitudin mi. Ultrices neque pharetra
            leo. Fames et cras enim nunc amet venenatis. Eger id vitae.
          </ArticleSection>

          <ArticleSection title="Lorem ipsum dolor sit amet consectetur.">
            Lorem ipsum dolor sit amet consectetur. Velit purus scelerisque convallis viverra et a malesuada elit. Id
            phaselius ultrices etiam in enim fermentum gravida quis porta. Aliquet et ac aliquet risus sodales
            porttitor congue sodales pulvinar. Egestas tempor id ultrices et sollicitudin mi. Ultrices neque pharetra
            leo. Fames et cras enim nunc amet venenatis. Eger id vitae lacinia leo nam imperdiet ac volutpat. Risus
            semper lacinia tincidunt aliquam. At cursus enim id mauris fermentum at. Commodo sed gravida sed urna
            lectus. Condimentum ac adipiscing felis arcu at eger. Eu elit et odio massa prum faucibus lectus mattis.
            Sed amet at nunc blandit. Amet faucibus vestibulum aliquet nisi non etiam vitae. In tristique porttitor
            pulvinar pharetra nunc magna.
          </ArticleSection>
        </section>

        {/* Bottom CTA Section */}
        <div className="border-t border-b border-dashed mt-12 pt-6 pb-6 mb-20 flex justify-between items-center">
          <p className="text-muted-foreground">Got a great idea but need help building it?</p>
          <Button variant="outline" className="rounded-full">
            Get in touch
          </Button>
        </div>
      </main>
    </div>
  );
}

type ArticleSectionProps = {
  title: string;
  children: React.ReactNode;
};

function ArticleSection({ title, children }: ArticleSectionProps) {
  return (
    <div>
      <h2 className="font-medium text-lg mb-2">{title}</h2>
      <p>{children}</p>
    </div>
  );
}
