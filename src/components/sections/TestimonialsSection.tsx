'use client'

import { Card, CardContent } from '@/components/ui/card'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'

const TestimonialsSection = () => {
	const [currentIndex, setCurrentIndex] = useState(0)

	const testimonials = [
		{
			name: 'Sarah Johnson',
			country: 'Kanada',
			university: 'Toronto Universiteti',
			program: 'Kompyuter Fanlari',
			rating: 5,
			text: "MissTwins Kanadada o'qish orzuimni amalga oshirdi. Ularning yordami butun jarayonda juda qimmatli edi.",
			image: 'SJ',
		},
		{
			name: 'Ahmed Hassan',
			country: 'Germaniya',
			university: 'Myunxen Texnika Universiteti',
			program: 'Muhandislik',
			rating: 5,
			text: "Jamoa murakkab Germaniya ta'lim tizimida yo'l topishda yordam berdi. Ularsiz buni qila olmasdim.",
			image: 'AH',
		},
		{
			name: 'Maria Rodriguez',
			country: 'Avstraliya',
			university: 'Melburn Universiteti',
			program: 'Biznes Boshqaruvi',
			rating: 5,
			text: 'Arizadan vizagacha hamma narsa professional darajada boshqarildi. Xizmatlarini yuqori tavsiya qilaman!',
			image: 'MR',
		},
		{
			name: 'David Kim',
			country: 'Buyuk Britaniya',
			university: 'Imperial College London',
			program: 'Ma&apos;lumotlar Fanlari',
			rating: 5,
			text: 'Grant yordami ajoyib edi. Ular menda mavjud bo&apos;lmagan moliyaviy yordamni topishda yordam berishdi.',
			image: 'DK',
		},
		{
			name: 'Priya Patel',
			country: 'AQSh',
			university: 'Stanford Universiteti',
			program: 'MBA',
			rating: 5,
			text: "Boshlanishidan tugashigacha ajoyib yordam. Jamoa haqiqatan ham talaba muvaffaqiyatiga g'amxo'r.",
			image: 'PP',
		},
		{
			name: 'James Wilson',
			country: 'Niderlandiya',
			university: 'Delft Texnologiya Universiteti',
			program: 'Arxitektura',
			rating: 5,
			text: "Madaniy orientatsiya va ketishdan oldingi yordam o'tishimni juda oson qildi.",
			image: 'JW',
		},
	]

	const renderStars = (rating: number) => {
		return Array.from({ length: 5 }, (_, i) => (
			<Star
				key={i}
				className={`h-4 w-4 ${
					i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
				}`}
			/>
		))
	}

	const nextSlide = useCallback(() => {
		setCurrentIndex(prevIndex =>
			prevIndex >= testimonials.length - 4 ? 0 : prevIndex + 1
		)
	}, [testimonials.length])

	const prevSlide = useCallback(() => {
		setCurrentIndex(prevIndex =>
			prevIndex === 0 ? testimonials.length - 4 : prevIndex - 1
		)
	}, [testimonials.length])

	// Keyboard navigation
	useEffect(() => {
		const handleKeyPress = (event: KeyboardEvent) => {
			if (event.key === 'ArrowLeft') {
				prevSlide()
			} else if (event.key === 'ArrowRight') {
				nextSlide()
			}
		}

		window.addEventListener('keydown', handleKeyPress)
		return () => window.removeEventListener('keydown', handleKeyPress)
	}, [nextSlide, prevSlide])

	return (
		<section id='testimonials' className='py-12 md:py-16 bg-white'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='text-center mb-8 md:mb-12'>
					<h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4'>
						Muvaffaqiyat Hikoyalari
					</h2>
					<p className='text-lg md:text-xl text-gray-600 max-w-3xl mx-auto'>
						Bizning yordamimiz bilan orzularini amalga oshirgan talabalardan
						eshiting
					</p>
				</div>

				{/* Testimonials Carousel */}
				<div className='mb-8'>
					{/* Main Carousel Container */}
					<div className='overflow-hidden rounded-2xl'>
						<div
							className='flex transition-all duration-700 ease-out'
							style={{ transform: `translateX(-${currentIndex * 25}%)` }}
						>
							{testimonials.map((testimonial, index) => (
								<div key={index} className='w-1/4 flex-shrink-0 px-3'>
									<Card className='border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full'>
										<CardContent className='p-6 h-full flex flex-col'>
											{/* Quote Icon */}
											<div className='flex justify-center mb-4'>
												<div className='w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center'>
													<Quote className='h-5 w-5 text-blue-600' />
												</div>
											</div>

											{/* Rating */}
											<div className='flex justify-center mb-4'>
												{renderStars(testimonial.rating)}
											</div>

											{/* Testimonial Text */}
											<p className='text-gray-700 text-center mb-4 leading-relaxed italic text-sm flex-grow'>
												&ldquo;{testimonial.text}&rdquo;
											</p>

											{/* Student Info */}
											<div className='text-center mt-auto'>
												<div className='flex items-center justify-center mb-3'>
													<div className='w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-xs'>
														{testimonial.image}
													</div>
												</div>
												<h4 className='font-semibold text-gray-900 mb-1 text-sm'>
													{testimonial.name}
												</h4>
												<p className='text-xs text-gray-600 mb-1'>
													{testimonial.program}
												</p>
												<p className='text-xs text-blue-600 font-medium'>
													{testimonial.university}
												</p>
												<p className='text-xs text-gray-500 mt-1'>
													{testimonial.country}
												</p>
											</div>
										</CardContent>
									</Card>
								</div>
							))}
						</div>
					</div>

					{/* Navigation Buttons */}
					<div className='flex justify-center space-x-4 mt-6'>
						<button
							onClick={prevSlide}
							className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105 ${
								currentIndex === 0
									? 'bg-gray-300 text-gray-500 cursor-not-allowed'
									: 'bg-blue-600 hover:bg-blue-700 text-white'
							}`}
							disabled={currentIndex === 0}
						>
							<ChevronLeft className='h-4 w-4' />
							<span className='text-sm font-medium'>Oldingi</span>
						</button>
						<button
							onClick={nextSlide}
							className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105 ${
								currentIndex >= testimonials.length - 4
									? 'bg-gray-300 text-gray-500 cursor-not-allowed'
									: 'bg-blue-600 hover:bg-blue-700 text-white'
							}`}
							disabled={currentIndex >= testimonials.length - 4}
						>
							<span className='text-sm font-medium'>Keyingi</span>
							<ChevronRight className='h-4 w-4' />
						</button>
					</div>
				</div>

				{/* Stats Section */}
				<div className='bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 md:p-8'>
					<div className='text-center mb-6'>
						<h3 className='text-xl md:text-2xl font-bold text-gray-900 mb-3'>
							Raqamlarda Bizning Ta&apos;sirimiz
						</h3>
						<p className='text-base md:text-lg text-gray-600'>
							Haqiqiy talabalardan haqiqiy natijalar
						</p>
					</div>

					<div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center'>
						<div>
							<div className='text-2xl md:text-3xl font-bold text-blue-600 mb-1'>
								98%
							</div>
							<div className='text-xs md:text-sm text-gray-600 font-medium'>
								Muvaffaqiyat Darajasi
							</div>
						</div>
						<div>
							<div className='text-2xl md:text-3xl font-bold text-blue-600 mb-1'>
								$2M+
							</div>
							<div className='text-xs md:text-sm text-gray-600 font-medium'>
								Olingan Grantlar
							</div>
						</div>
						<div>
							<div className='text-2xl md:text-3xl font-bold text-blue-600 mb-1'>
								25+
							</div>
							<div className='text-xs md:text-sm text-gray-600 font-medium'>
								Davlatlar
							</div>
						</div>
						<div>
							<div className='text-2xl md:text-3xl font-bold text-blue-600 mb-1'>
								500+
							</div>
							<div className='text-xs md:text-sm text-gray-600 font-medium'>
								Baxtli Talabalar
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default TestimonialsSection
