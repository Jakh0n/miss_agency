'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
	BookOpen,
	DollarSign,
	FileText,
	Globe,
	GraduationCap,
	Plane,
	Shield,
	Users,
} from 'lucide-react'

const ServicesSection = () => {
	const services = [
		{
			icon: BookOpen,
			title: 'Universitet Tanlash',
			description:
				"Sizning profilingiz, byudjetingiz va qiziqishlaringizga asoslangan to'liq tadqiqot va moslashtirish.",
			features: [
				'Universitet Reytinglari Tahlili',
				'Dastur Mosligini Tekshirish',
				"Qabul Talablari Ko'rib Chiqish",
			],
		},
		{
			icon: FileText,
			title: 'Ariza Yordami',
			description:
				"Barcha ariza hujjatlari va rasmiylashtirish bo'yicha to'liq yordam.",
			features: ['SOP va Essay Yozish', 'Tavsiya Xatlari', 'Hujjat Tayyorlash'],
		},
		{
			icon: Globe,
			title: 'Viza Maslahati',
			description: "Murakkab viza ariza jarayoni bo'yicha ekspert maslahat.",
			features: [
				'Viza Hujjatlari',
				'Suhbatga Tayyorlash',
				'Vaqt Jadvali Boshqaruvi',
			],
		},
		{
			icon: Users,
			title: 'Ketishdan Oldingi Yordam',
			description:
				"Xalqaro safaringizni boshlashdan oldin bilishingiz kerak bo'lgan hamma narsa.",
			features: [
				'Yashash Joyi Yordami',
				'Madaniy Orientatsiya',
				'Sayohat Rejalashtirish',
			],
		},
		{
			icon: DollarSign,
			title: 'Grant Yordami',
			description: 'Grant va moliyaviy yordam topish va ariza berishda yordam.',
			features: [
				'Grant Tadqiqoti',
				'Ariza Yordami',
				'Moliyaviy Rejalashtirish',
			],
		},
		{
			icon: GraduationCap,
			title: 'Akademik Yordam',
			description:
				"Chet elda o'qish safaringiz davomida uzluksiz akademik maslahat.",
			features: ['Fan Tanlash', 'Akademik Rejalashtirish', 'Martaba Maslahati'],
		},
	]

	const additionalServices = [
		{
			icon: Plane,
			title: 'Sayohat Tashkiloti',
			description: 'Uchish chiptalari va sayohat logistikasi',
		},
		{
			icon: Shield,
			title: "Sug'urta Maslahati",
			description: "Sog'liq va sayohat sug'urtasi yordami",
		},
	]

	return (
		<section id='services' className='py-20 bg-gray-50'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='text-center mb-16'>
					<h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>
						Bizning Xizmatlarimiz
					</h2>
					<p className='text-xl text-gray-600 max-w-3xl mx-auto'>
						Dastlabki maslahatdan tortib, bitirishgacha bo\'lgan barcha
						bosqichlarda chet elda o\'qish safaringiz uchun to\'liq yordam
						beramiz.
					</p>
				</div>

				{/* Main Services Grid */}
				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
					{services.map((service, index) => (
						<Card
							key={index}
							className='hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md'
						>
							<CardHeader className='text-center pb-4'>
								<div className='inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4'>
									<service.icon className='h-8 w-8 text-blue-600' />
								</div>
								<CardTitle className='text-xl font-semibold text-gray-900'>
									{service.title}
								</CardTitle>
							</CardHeader>
							<CardContent className='pt-0'>
								<p className='text-gray-600 mb-6 leading-relaxed'>
									{service.description}
								</p>
								<ul className='space-y-2 mb-6'>
									{service.features.map((feature, featureIndex) => (
										<li
											key={featureIndex}
											className='flex items-center text-sm text-gray-600'
										>
											<div className='w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0'></div>
											{feature}
										</li>
									))}
								</ul>
								<Button className='w-full bg-blue-600 hover:bg-blue-700'>
									Ko'proq Bilish
								</Button>
							</CardContent>
						</Card>
					))}
				</div>

				{/* Additional Services */}
				<div className='bg-white rounded-2xl p-8 shadow-lg'>
					<h3 className='text-2xl font-bold text-gray-900 text-center mb-8'>
						Qo'shimcha Yordam Xizmatlari
					</h3>
					<div className='grid md:grid-cols-2 gap-8'>
						{additionalServices.map((service, index) => (
							<div key={index} className='flex items-start space-x-4'>
								<div className='flex-shrink-0'>
									<div className='w-12 h-12 bg-green-100 rounded-full flex items-center justify-center'>
										<service.icon className='h-6 w-6 text-green-600' />
									</div>
								</div>
								<div>
									<h4 className='text-lg font-semibold text-gray-900 mb-2'>
										{service.title}
									</h4>
									<p className='text-gray-600'>{service.description}</p>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* CTA Section */}
				<div className='text-center mt-16'>
					<div className='bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white'>
						<h3 className='text-2xl md:text-3xl font-bold mb-6'>
							Safaringizni Boshlashga Tayyormisiz?
						</h3>
						<p className='text-xl mb-8 opacity-90'>
							Ekspert maslahatchilarimizdan shaxsiy maslahat oling
						</p>
						<Button
							asChild
							size='lg'
							className='bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4 h-auto'
						>
							<a href='#contact'>Bepul Maslahat Olish</a>
						</Button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ServicesSection
