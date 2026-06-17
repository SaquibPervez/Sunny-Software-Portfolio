import Hero from '../components/HealthCare/Hero'
import CoreHealthcareSolutions from '../components/HealthCare/CoreHealthcareSolutions'
import TrustCredibility from '../components/HealthCare/TrustCredibility'
import ClientBenefits from '../components/HealthCare/ClientBenefits'
import TechnologyIntegration from '../components/HealthCare/TechnologyIntegration'
import IndustryUseCases from '../components/HealthCare/IndustryUseCases'
import DevelopmentProcess from '../components/HealthCare/DevelopmentProcess'
import PortfolioShowcase from '../components/HealthCare/PortfolioShowcase'
import DetailedCapabilityBreakdown from '../components/HealthCare/DetailedCapabilityBreakdown'
import CTA from '../components/HealthCare/CTA'

function Home() {
  return (
    <>
      <Hero />
      <TrustCredibility />
      <CoreHealthcareSolutions />
      <DetailedCapabilityBreakdown />
      <PortfolioShowcase />
      <IndustryUseCases />
      <TechnologyIntegration />
      <DevelopmentProcess />
      <ClientBenefits />
      <CTA />
    </>
  )
}

export default Home