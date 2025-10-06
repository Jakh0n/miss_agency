'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
	ChevronLeft,
	ChevronRight,
	GraduationCap,
	MapPin,
	Star,
} from 'lucide-react'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'

const UniversitiesSection = () => {
	const [currentIndex, setCurrentIndex] = useState(0)

	const universities = [
		{
			name: 'Chonnam National University',
			country: 'Janubiy Koreya',
			city: 'Gwangju',
			image: '/chonnam.png',
			description:
				'Koreyaning eng qadimgi va nufuzli davlat universitetlaridan biri. Texnologiya va tadqiqot sohasida kuchli.',
			programs: ['Muhandislik', 'Tibbiyot', 'Tabiiy Fanlar', 'Ijtimoiy Fanlar'],
			ranking: 'Top 500',
			language: 'Ingliz tili',
			scholarship: 'Grantlar mavjud',
		},
		{
			name: "Gwangju Women's University",
			country: 'Janubiy Koreya',
			city: 'Gwangju',
			image: "/Gwangju_Women's_University.jpg",
			description:
				"Ayollar uchun maxsus yaratilgan universitet. Ta'lim va tadqiqot sohasida yuqori standartlar.",
			programs: ["Ta'lim", "San'at", 'Ijtimoiy Fanlar', 'Biznes'],
			ranking: 'Top 1000',
			language: 'Koreys va Ingliz tili',
			scholarship: 'Ayollar uchun maxsus grantlar',
		},
		{
			name: 'Hanyang University',
			country: 'Janubiy Koreya',
			city: 'Seoul',
			image: '/Hanyang-University.jpg',
			description:
				'Koreyaning eng yaxshi texnik universitetlaridan biri. Samsung, LG kabi kompaniyalar bilan hamkorlik.',
			programs: ['Muhandislik', 'Biznes', 'Kompyuter Fanlari', 'Arxitektura'],
			ranking: 'Top 200',
			language: 'Ingliz tili',
			scholarship: 'Yuqori grantlar',
		},
		{
			name: 'Incheon National University',
			country: 'Janubiy Koreya',
			city: 'Incheon',
			image: '/incheon .jpg',
			description:
				'Zamonaviy kampus va xalqaro talabalar uchun qulay sharoitlar. Dengiz porti shahrida joylashgan.',
			programs: ['Dengiz Muhandisligi', 'Biznes', "Ta'lim", 'Ijtimoiy Fanlar'],
			ranking: 'Top 800',
			language: 'Ingliz tili',
			scholarship: 'Xalqaro talabalar uchun grantlar',
		},
		{
			name: 'Kyungpook National University',
			country: 'Janubiy Koreya',
			city: 'Daegu',
			image: '/kyungpook.jpg',
			description:
				"Koreyaning janubiy qismidagi eng yirik universitet. An'anaviy va zamonaviy ta'lim uyg'unligi.",
			programs: ['Tibbiyot', 'Muhandislik', 'Tabiiy Fanlar', "San'at"],
			ranking: 'Top 400',
			language: 'Koreys va Ingliz tili',
			scholarship: 'Davlat grantlari',
		},
		{
			name: 'Pusan National University',
			country: 'Janubiy Koreya',
			city: 'Busan',
			image: '/pusan .jpg',
			description:
				'Koreyaning ikkinchi yirik shahridagi nufuzli universitet. Dengiz va logistika sohasida kuchli.',
			programs: [
				'Dengiz Muhandisligi',
				'Biznes',
				'Tibbiyot',
				'Ijtimoiy Fanlar',
			],
			ranking: 'Top 300',
			language: 'Ingliz tili',
			scholarship: 'Yuqori darajadagi grantlar',
		},
	]

	const nextSlide = useCallback(() => {
		setCurrentIndex(prevIndex =>
			prevIndex === universities.length - 1 ? 0 : prevIndex + 1
		)
	}, [universities.length])

	const prevSlide = useCallback(() => {
		setCurrentIndex(prevIndex =>
			prevIndex === 0 ? universities.length - 1 : prevIndex - 1
		)
	}, [universities.length])

	const goToSlide = (index: number) => {
		setCurrentIndex(index)
	}

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
		<section
			id='universities'
			className='py-8 md:py-12 lg:py-16 bg-gradient-to-br from-blue-50 to-indigo-50'
		>
			<div className='max-w-7xl mx-auto px-3 sm:px-4 lg:px-8'>
				{/* Section Header */}
				<div className='text-center mb-6 md:mb-8 lg:mb-12'>
					<h2 className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 md:mb-4'>
						Hamkor Universitetlarimiz
					</h2>
					<p className='text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-2'>
						Biz sizni dunyoning eng yaxshi universitetlariga yo&apos;llaymiz.
						Har bir universitet o&apos;zining noyob imkoniyatlari va grantlari
						bilan ajralib turadi.
					</p>
				</div>

				{/* Universities Slider */}
				<div className='relative group'>
					{/* Main Slider Container */}
					<div className='overflow-hidden rounded-2xl shadow-2xl'>
						<div
							className='flex transition-all duration-700 ease-out'
							style={{ transform: `translateX(-${currentIndex * 100}%)` }}
						>
							{universities.map((university, index) => (
								<div key={index} className='w-full flex-shrink-0'>
									<Card className='border-0 shadow-lg bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all duration-500 hover:scale-[1.01]'>
										<CardContent className='p-0'>
											<div className='grid grid-cols-1 md:grid-cols-2 gap-0'>
												{/* University Image */}
												<div className='relative h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 overflow-hidden'>
													<Image
														src={university.image}
														alt={university.name}
														fill
														className='object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-t-none transition-transform duration-700 hover:scale-105'
													/>
													<div className='absolute top-3 right-3 sm:top-4 sm:right-4'>
														<div className='bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 sm:px-3 sm:py-1 flex items-center space-x-1'>
															<Star className='h-3 w-3 sm:h-4 sm:w-4 text-yellow-500 fill-current' />
															<span className='text-xs sm:text-sm font-semibold text-gray-700'>
																{university.ranking}
															</span>
														</div>
													</div>
												</div>

												{/* University Info */}
												<div className='p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-center'>
													<div className='mb-3 sm:mb-4'>
														<h3 className='text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2'>
															{university.name}
														</h3>
														<div className='flex items-center space-x-2 sm:space-x-4 text-gray-600 mb-3 sm:mb-4'>
															<div className='flex items-center space-x-1'>
																<MapPin className='h-3 w-3 sm:h-4 sm:w-4' />
																<span className='text-xs sm:text-sm'>
																	{university.city}, {university.country}
																</span>
															</div>
														</div>
														<p className='text-gray-600 leading-relaxed mb-3 sm:mb-4 text-xs sm:text-sm md:text-base'>
															{university.description}
														</p>
													</div>

													{/* Programs */}
													<div className='mb-3 sm:mb-4'>
														<h4 className='text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-2'>
															Mashhur Dasturlar
														</h4>
														<div className='flex flex-wrap gap-1 sm:gap-2'>
															{university.programs.map(
																(program, programIndex) => (
																	<span
																		key={programIndex}
																		className='bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium'
																	>
																		{program}
																	</span>
																)
															)}
														</div>
													</div>

													{/* University Details */}
													<div className='grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-3 sm:mb-4'>
														<div className='bg-gray-50 rounded-lg p-2 sm:p-3'>
															<div className='flex items-center space-x-2 mb-1'>
																<GraduationCap className='h-3 w-3 text-blue-600' />
																<span className='text-xs font-medium text-gray-700'>
																	Til
																</span>
															</div>
															<p className='text-xs text-gray-600'>
																{university.language}
															</p>
														</div>
														<div className='bg-gray-50 rounded-lg p-2 sm:p-3'>
															<div className='flex items-center space-x-2 mb-1'>
																<Star className='h-3 w-3 text-green-600' />
																<span className='text-xs font-medium text-gray-700'>
																	Grantlar
																</span>
															</div>
															<p className='text-xs text-gray-600'>
																{university.scholarship}
															</p>
														</div>
													</div>

													{/* CTA Button */}
													<Button className='w-full bg-blue-600 hover:bg-blue-700 text-xs sm:text-sm md:text-base py-2 sm:py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg'>
														Batafsil Ma&apos;lumot
													</Button>
												</div>
											</div>
										</CardContent>
									</Card>
								</div>
							))}
						</div>
					</div>

					{/* Navigation Arrows */}
					<button
						onClick={prevSlide}
						className='absolute left-1 sm:left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white/95 backdrop-blur-md hover:bg-white rounded-full p-1.5 sm:p-2 md:p-3 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl opacity-70 group-hover:opacity-100 z-10'
						aria-label='Oldingi universitet'
					>
						<ChevronLeft className='h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-gray-700 hover:text-blue-600 transition-colors duration-200' />
					</button>
					<button
						onClick={nextSlide}
						className='absolute right-1 sm:right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white/95 backdrop-blur-md hover:bg-white rounded-full p-1.5 sm:p-2 md:p-3 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl opacity-70 group-hover:opacity-100 z-10'
						aria-label='Keyingi universitet'
					>
						<ChevronRight className='h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-gray-700 hover:text-blue-600 transition-colors duration-200' />
					</button>
				</div>

				{/* Dots Indicator */}
				<div className='flex justify-center space-x-2 mt-4 sm:mt-6'>
					{universities.map((_, index) => (
						<button
							key={index}
							onClick={() => goToSlide(index)}
							className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
								index === currentIndex
									? 'bg-blue-600 scale-125 shadow-md'
									: 'bg-gray-300 hover:bg-blue-400 hover:scale-110'
							}`}
							aria-label={`${index + 1}-universitet`}
						/>
					))}
				</div>
			</div>
		</section>
	)
}

export default UniversitiesSection
