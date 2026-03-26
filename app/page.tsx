import { CTAForm } from '@/components/CTAForm';
import { FAQ } from '@/components/FAQ';
import { FeatureHighlight } from '@/components/FeatureHighlight';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { HowItWorks } from '@/components/HowItWorks';
import { Navbar } from '@/components/Navbar';
import { Pricing } from '@/components/Pricing';
import { Problems } from '@/components/Problems';
import { TrustedBy } from '@/components/TrustedBy';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustedBy />
      <Problems />
      <FeatureHighlight />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <CTAForm />
      <Footer />
    </main>
  );
}
