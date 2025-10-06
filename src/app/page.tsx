import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import AboutSection from '@/components/sections/AboutSection'
import ContactSection from '@/components/sections/ContactSection'
import HeroSection from '@/components/sections/HeroSection'
import ServicesSection from '@/components/sections/ServicesSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import UniversitiesSection from '@/components/sections/UniversitiesSection'

export default function Home() {
	return (
		<main className='min-h-screen'>
			<Header />
			<HeroSection />
			<AboutSection />
			<ServicesSection />
			<UniversitiesSection />
			<TestimonialsSection />
			<ContactSection />
			<Footer />
		</main>
	)
}
