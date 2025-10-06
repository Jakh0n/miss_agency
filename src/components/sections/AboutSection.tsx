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
		<section id='about' className='py-20 bg-white'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='text-center mb-16'>
					<h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>
						Nima Uchun MissTwins?
					</h2>
					<p className='text-xl text-gray-600 max-w-3xl mx-auto'>
						Biz oddiy konsalting firmasi emasmiz. Biz sizning akademik
						muvaffaqiyat va xalqaro martaba qurishda hamkoringizmiz.
					</p>
				</div>

				<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16'>
					{features.map((feature, index) => (
						<Card
							key={index}
							className='text-center hover:shadow-lg transition-shadow duration-300 border-0 shadow-md'
						>
							<CardContent className='p-8'>
								<div className='inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6'>
									<feature.icon className='h-8 w-8 text-blue-600' />
								</div>
								<h3 className='text-xl font-semibold text-gray-900 mb-4'>
									{feature.title}
								</h3>
								<p className='text-gray-600 leading-relaxed'>
									{feature.description}
								</p>
							</CardContent>
						</Card>
					))}
				</div>

				{/* Mission Statement */}
				<div className='bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12'>
					<div className='max-w-4xl mx-auto text-center'>
						<h3 className='text-2xl md:text-3xl font-bold text-gray-900 mb-6'>
							Bizning Missiyamiz
						</h3>
						<p className='text-lg text-gray-700 leading-relaxed mb-8'>
							Dunyoning eng yaxshi ta&apos;limiga kirish imkoniyatini
							demokratlashtirish orqali talabalarga akademik orzularini amalga
							oshirish va muvaffaqiyatli xalqaro martaba qurish imkoniyatini
							berish.
						</p>
						<div className='grid md:grid-cols-3 gap-8 text-center'>
							<div>
								<div className='text-3xl font-bold text-blue-600 mb-2'>15+</div>
								<div className='text-gray-600'>Yillik Tajriba</div>
							</div>
							<div>
								<div className='text-3xl font-bold text-blue-600 mb-2'>
									500+
								</div>
								<div className='text-gray-600'>Baxtli Talabalar</div>
							</div>
							<div>
								<div className='text-3xl font-bold text-blue-600 mb-2'>25+</div>
								<div className='text-gray-600'>Qamrab Olingan Davlatlar</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutSection
