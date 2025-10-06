'use client'

import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle, Heart, Target, Users } from 'lucide-react'

const AboutSection = () => {
	const features = [
		{
			icon: Target,
			title: 'Shaxsiy Yondashuv',
			description:
				"Sizning akademik ta'lim, qiziqishlaringiz va martaba maqsadlaringizga asoslangan maxsus maslahat.",
		},
		{
			icon: Users,
			title: 'Ekspert Jamoa',
			description:
				"Xalqaro ta'lim tizimlari bo'yicha chuqur bilimga ega tajribali maslahatchilar.",
		},
		{
			icon: CheckCircle,
			title: 'Isbotlangan Natijalar',
			description:
				'98% muvaffaqiyat darajasi bilan talabalar orzu universitetlariga qabul qilinadi.',
		},
		{
			icon: Heart,
			title: 'Doimiy Yordam',
			description:
				'Ariza berishdan tortib, bitirishgacha va undan keyin ham uzluksiz yordam.',
		},
	]

	return (
		<section id='about' className='py-12 sm:py-16 md:py-20 bg-white'>
			<div className='max-w-7xl mx-auto px-3 sm:px-4 lg:px-8'>
				<div className='text-center mb-12 sm:mb-16'>
					<h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6'>
						Nima Uchun MissTwins?
					</h2>
					<p className='text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto px-2'>
						Biz oddiy konsalting firmasi emasmiz. Biz sizning akademik
						muvaffaqiyat va xalqaro martaba qurishda hamkoringizmiz.
					</p>
				</div>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16'>
					{features.map((feature, index) => (
						<Card
							key={index}
							className='text-center hover:shadow-lg transition-shadow duration-300 border-0 shadow-md'
						>
							<CardContent className='p-4 sm:p-6 lg:p-8'>
								<div className='inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-blue-100 rounded-full mb-4 sm:mb-6'>
									<feature.icon className='h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-blue-600' />
								</div>
								<h3 className='text-base sm:text-lg lg:text-xl font-semibold text-gray-900 mb-3 sm:mb-4'>
									{feature.title}
								</h3>
								<p className='text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed'>
									{feature.description}
								</p>
							</CardContent>
						</Card>
					))}
				</div>

				{/* Mission Statement */}
				<div className='bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12'>
					<div className='max-w-4xl mx-auto text-center'>
						<h3 className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6'>
							Bizning Missiyamiz
						</h3>
						<p className='text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8'>
							Dunyoning eng yaxshi ta&apos;limiga kirish imkoniyatini
							demokratlashtirish orqali talabalarga akademik orzularini amalga
							oshirish va muvaffaqiyatli xalqaro martaba qurish imkoniyatini
							berish.
						</p>
						<div className='grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 text-center'>
							<div>
								<div className='text-xl sm:text-2xl md:text-3xl font-bold text-blue-600 mb-1 sm:mb-2'>
									15+
								</div>
								<div className='text-xs sm:text-sm md:text-base text-gray-600'>
									Yillik Tajriba
								</div>
							</div>
							<div>
								<div className='text-xl sm:text-2xl md:text-3xl font-bold text-blue-600 mb-1 sm:mb-2'>
									500+
								</div>
								<div className='text-xs sm:text-sm md:text-base text-gray-600'>
									Baxtli Talabalar
								</div>
							</div>
							<div>
								<div className='text-xl sm:text-2xl md:text-3xl font-bold text-blue-600 mb-1 sm:mb-2'>
									25+
								</div>
								<div className='text-xs sm:text-sm md:text-base text-gray-600'>
									Qamrab Olingan Davlatlar
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutSection
