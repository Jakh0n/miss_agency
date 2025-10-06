'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Award, BookOpen, Globe, Users } from 'lucide-react'
import Link from 'next/link'

const HeroSection = () => {
	const stats = [
		{ icon: Users, value: '500+', label: 'Joylashtirilgan Talabalar' },
		{ icon: Globe, value: '25+', label: 'Davlatlar' },
		{ icon: Award, value: '98%', label: 'Muvaffaqiyat Darajasi' },
		{ icon: BookOpen, value: '50+', label: 'Universitetlar' },
	]

	return (
		<section className='relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-16'>
			{/* Background Pattern */}
			<div className='absolute inset-0 opacity-30'>
				<div
					className='absolute inset-0'
					style={{
						backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e0e7ff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
					}}
				></div>
			</div>

			<div className='relative max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-12 sm:py-16 md:py-20'>
				<div className='text-center'>
					{/* Main Heading */}
					<h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight'>
						Chet Elda O&apos;qish
						<span className='block text-blue-600'>Oson va Qulay</span>
					</h1>

					{/* Subheading */}
					<p className='text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-2'>
						Biz ambitsiyali talabalarga dunyoning eng yaxshi universitetlarida
						o&apos;qish orzularini amalga oshirishda yordam beramiz. Ariza
						berishdan tortib, bitirishgacha bo&apos;lgan yo&apos;lda siz bilan
						birga bo&apos;lamiz.
					</p>

					{/* CTA Buttons */}
					<div className='flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16'>
						<Button
							asChild
							size='lg'
							className='bg-blue-600 hover:bg-blue-700 text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-3 sm:py-4 h-auto w-full sm:w-auto'
						>
							<Link href='#contact'>
								Safaringizni Boshlang
								<ArrowRight className='ml-1 sm:ml-2 h-4 w-4 sm:h-5 sm:w-5' />
							</Link>
						</Button>
						<Button
							asChild
							variant='outline'
							size='lg'
							className='text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-3 sm:py-4 h-auto border-2 w-full sm:w-auto'
						>
							<Link href='#services'>Ko&apos;proq Bilish</Link>
						</Button>
					</div>

					{/* Stats */}
					<div className='grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto'>
						{stats.map((stat, index) => (
							<div key={index} className='text-center'>
								<div className='inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-blue-100 rounded-full mb-2 sm:mb-3 md:mb-4'>
									<stat.icon className='h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-blue-600' />
								</div>
								<div className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-1 sm:mb-2'>
									{stat.value}
								</div>
								<div className='text-xs sm:text-sm md:text-base text-gray-600 font-medium'>
									{stat.label}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Scroll Indicator */}
			<div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce'>
				<div className='w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center'>
					<div className='w-1 h-3 bg-gray-400 rounded-full mt-2'></div>
				</div>
			</div>
		</section>
	)
}

export default HeroSection
