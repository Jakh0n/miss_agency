'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { CheckCircle, Clock, Mail, MapPin, Phone } from 'lucide-react'
import { useState } from 'react'

interface FormData {
	name: string
	phone: string
	message: string
}

const ContactSection = () => {
	const [formData, setFormData] = useState<FormData>({
		name: '',
		phone: '',
		message: '',
	})
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [isSubmitted, setIsSubmitted] = useState(false)

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target
		setFormData(prev => ({
			...prev,
			[name]: value,
		}))
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setIsSubmitting(true)

		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			})

			if (response.ok) {
				setIsSubmitted(true)
				setFormData({
					name: '',
					phone: '',
					message: '',
				})
			} else {
				throw new Error('Failed to submit form')
			}
		} catch (error) {
			console.error('Error submitting form:', error)
			alert('Failed to submit form. Please try again.')
		} finally {
			setIsSubmitting(false)
		}
	}

	const contactInfo = [
		{
			icon: Mail,
			title: 'Email',
			details: 'info@misstwins.com',
			description: 'Istalgan vaqtda email yuboring',
		},
		{
			icon: Phone,
			title: 'Telefon',
			details: '+998 97 009 93 34',
			description: 'Dush-Shanba 9:00-18:00',
		},
		{
			icon: MapPin,
			title: 'Ofis',
			details: 'Sharof Rashidov Avenue, 69,  Order Plaza 9-qavat 1-hona',
			description: "O'zbekiston, Toshkent shahar",
		},
		{
			icon: Clock,
			title: 'Ish Vaqti',
			details: 'Dushanba - Shanba',
			description: '9:00 - 18:00',
		},
	]

	if (isSubmitted) {
		return (
			<section id='contact' className='py-20 bg-gray-50'>
				<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
					<Card className='border-0 shadow-lg'>
						<CardContent className='p-12'>
							<div className='w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6'>
								<CheckCircle className='h-10 w-10 text-green-600' />
							</div>
							<h2 className='text-3xl font-bold text-gray-900 mb-4'>Rahmat!</h2>
							<p className='text-xl text-gray-600 mb-8'>
								Xabaringizni qabul qildik va 24 soat ichida javob beramiz.
							</p>
							<Button
								onClick={() => setIsSubmitted(false)}
								className='bg-blue-600 hover:bg-blue-700'
							>
								Yana Xabar Yuborish
							</Button>
						</CardContent>
					</Card>
				</div>
			</section>
		)
	}

	return (
		<section id='contact' className='py-12 sm:py-16 md:py-20 bg-gray-50'>
			<div className='max-w-7xl mx-auto px-3 sm:px-4 lg:px-8'>
				<div className='text-center mb-8 sm:mb-10 md:mb-12'>
					<h2 className='text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4'>
						Bugun Boshlang
					</h2>
					<p className='text-sm sm:text-base md:text-lg text-gray-600 max-w-xl sm:max-w-2xl mx-auto px-2'>
						Chet elda o&apos;qish safaringizni boshlashga tayyormisiz? Bepul
						maslahat va shaxsiy yondashuv uchun biz bilan bog&apos;laning.
					</p>
				</div>

				<div className='grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12'>
					{/* Contact Form */}
					<div className='bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8'>
						<div className='flex items-center mb-4 sm:mb-6'>
							<div className='w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-2 sm:mr-3'>
								<svg
									className='w-4 h-4 sm:w-5 sm:h-5 text-blue-600'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M12 6v6m0 0v6m0-6h6m-6 0H6'
									/>
								</svg>
							</div>
							<h3 className='text-lg sm:text-xl font-bold text-gray-900'>
								Bizga Xabar Yuboring
							</h3>
						</div>

						<form onSubmit={handleSubmit} className='space-y-4 sm:space-y-6'>
							<div>
								<Label
									htmlFor='name'
									className='block text-xs font-medium text-gray-700 mb-2'
								>
									To&apos;liq Ism *
								</Label>
								<Input
									id='name'
									name='name'
									value={formData.name}
									onChange={handleInputChange}
									required
									className='w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-white text-black text-sm sm:text-base'
									placeholder='Ismingizni kiriting'
								/>
							</div>

							<div>
								<Label
									htmlFor='phone'
									className='block text-xs font-medium text-gray-700 mb-2'
								>
									Telefon Raqami *
								</Label>
								<Input
									id='phone'
									name='phone'
									value={formData.phone}
									onChange={handleInputChange}
									required
									className='w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-white text-black text-sm sm:text-base'
									placeholder='+998 90 123 45 67'
								/>
							</div>

							<div>
								<Label
									htmlFor='message'
									className='block text-xs font-medium text-gray-700 mb-2'
								>
									Xabar *
								</Label>
								<Textarea
									id='message'
									name='message'
									value={formData.message}
									onChange={handleInputChange}
									required
									rows={3}
									className='w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-white text-black resize-none text-sm sm:text-base'
									placeholder='Akademik maqsadlaringiz haqida va biz qanday yordam bera olishimiz haqida gapiring...'
								/>
							</div>

							<Button
								type='submit'
								className='w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-2.5 sm:py-3 px-4 rounded-lg transition-colors duration-200 text-sm sm:text-base'
								disabled={isSubmitting}
							>
								{isSubmitting ? 'Yuborilmoqda...' : 'Xabar Yuborish'}
							</Button>
						</form>
					</div>

					{/* Contact Information */}
					<div className='space-y-4 sm:space-y-6'>
						<div>
							<h3 className='text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4'>
								Bog&apos;lanish Ma&apos;lumotlari
							</h3>
							<p className='text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6'>
								Bizning ekspert maslahatchilarimiz yo&apos;lda har bir qadamda
								yordam berish uchun bu yerda. Quyidagi kanallardan birortasi
								orqali biz bilan bog&apos;laning.
							</p>
						</div>

						<div className='space-y-3 sm:space-y-4'>
							{contactInfo.map((info, index) => (
								<div key={index} className='flex items-start space-x-3'>
									<div className='flex-shrink-0'>
										<div className='w-7 h-7 sm:w-8 sm:h-8 bg-blue-100 rounded-full flex items-center justify-center'>
											<info.icon className='h-3 w-3 sm:h-4 sm:w-4 text-blue-600' />
										</div>
									</div>
									<div>
										<h4 className='text-xs sm:text-sm font-semibold text-gray-900 mb-1'>
											{info.title}
										</h4>
										<p className='text-gray-900 font-medium mb-1 text-xs sm:text-sm'>
											{info.details}
										</p>
										<p className='text-gray-600 text-xs'>{info.description}</p>
									</div>
								</div>
							))}
						</div>

						{/* Quick Response Promise */}
						<Card className='bg-gradient-to-r from-blue-50 to-indigo-50 border-0'>
							<CardContent className='p-3 sm:p-4'>
								<h4 className='text-xs sm:text-sm font-semibold text-gray-900 mb-2'>
									Tez Javob Kafolati
								</h4>
								<p className='text-gray-600 text-xs'>
									Barcha so&apos;rovlarga 24 soat ichida javob beramiz.
									Shoshilinch masalalar uchun
									to&apos;g&apos;ridan-to&apos;g&apos;ri qo&apos;ng&apos;iroq
									qiling.
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ContactSection
