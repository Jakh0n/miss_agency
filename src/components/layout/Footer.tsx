'use client'

import {
	Facebook,
	Globe,
	Instagram,
	Linkedin,
	Mail,
	MapPin,
	Phone,
	Twitter,
} from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
	const currentYear = new Date().getFullYear()

	const footerLinks = {
		services: [
			{ name: 'Universitet Tanlash', href: '#services' },
			{ name: 'Ariza Yordami', href: '#services' },
			{ name: 'Viza Maslahati', href: '#services' },
			{ name: 'Grant Yordami', href: '#services' },
		],
		countries: [
			{ name: 'AQSh', href: '#' },
			{ name: 'Kanada', href: '#' },
			{ name: 'Buyuk Britaniya', href: '#' },
			{ name: 'Avstraliya', href: '#' },
			{ name: 'Germaniya', href: '#' },
			{ name: 'Niderlandiya', href: '#' },
		],
		support: [
			{ name: 'Biz Haqimizda', href: '#about' },
			{ name: 'Universitetlar', href: '#universities' },
			{ name: 'Muvaffaqiyat Hikoyalari', href: '#testimonials' },
			{ name: "Bog'lanish", href: '#contact' },
			{ name: 'Savollar', href: '#' },
		],
	}

	const socialLinks = [
		{ icon: Facebook, href: '#', label: 'Facebook' },
		{ icon: Twitter, href: '#', label: 'Twitter' },
		{ icon: Instagram, href: '#', label: 'Instagram' },
		{ icon: Linkedin, href: '#', label: 'LinkedIn' },
	]

	return (
		<footer className='bg-gray-900 text-white'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
				<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12'>
					{/* Company Info */}
					<div className='lg:col-span-1'>
						<Link href='/' className='flex items-center space-x-2 mb-6'>
							<Globe className='h-8 w-8 text-blue-400' />
							<span className='text-xl font-bold'>MissTwins</span>
						</Link>
						<p className='text-gray-300 mb-6 leading-relaxed'>
							Xalqaro ta&apos;limda ishonchli hamkoringiz. Biz talabalarga
							ekspert maslahat va yordam bilan chet elda o&apos;qish orzularini
							amalga oshirishda yordam beramiz.
						</p>
						<div className='space-y-3'>
							<div className='flex items-center space-x-3'>
								<Mail className='h-5 w-5 text-blue-400' />
								<span className='text-gray-300'>info@misstwins.com</span>
							</div>
							<div className='flex items-center space-x-3'>
								<Phone className='h-5 w-5 text-blue-400' />
								<span className='text-gray-300'>+998 90 123 45 67</span>
							</div>
							<div className='flex items-center space-x-3'>
								<MapPin className='h-5 w-5 text-blue-400' />
								<span className='text-gray-300'>
									Toshkent, O&apos;zbekiston
								</span>
							</div>
						</div>
					</div>

					{/* Services */}
					<div>
						<h3 className='text-lg font-semibold mb-6'>
							Bizning Xizmatlarimiz
						</h3>
						<ul className='space-y-3'>
							{footerLinks.services.map((link, index) => (
								<li key={index}>
									<Link
										href={link.href}
										className='text-gray-300 hover:text-blue-400 transition-colors duration-200'
									>
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Countries */}
					<div>
						<h3 className='text-lg font-semibold mb-6'>Mashhur Davlatlar</h3>
						<ul className='space-y-3'>
							{footerLinks.countries.map((link, index) => (
								<li key={index}>
									<Link
										href={link.href}
										className='text-gray-300 hover:text-blue-400 transition-colors duration-200'
									>
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Support */}
					<div>
						<h3 className='text-lg font-semibold mb-6'>Yordam</h3>
						<ul className='space-y-3'>
							{footerLinks.support.map((link, index) => (
								<li key={index}>
									<Link
										href={link.href}
										className='text-gray-300 hover:text-blue-400 transition-colors duration-200'
									>
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>

				{/* Bottom Section */}
				<div className='border-t border-gray-800 pt-8'>
					<div className='flex flex-col md:flex-row justify-between items-center'>
						<div className='text-gray-400 text-sm mb-4 md:mb-0'>
							© {currentYear} MissTwins. Barcha huquqlar himoyalangan.
						</div>

						{/* Social Links */}
						<div className='flex space-x-4'>
							{socialLinks.map((social, index) => (
								<Link
									key={index}
									href={social.href}
									className='w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200'
									aria-label={social.label}
								>
									<social.icon className='h-5 w-5' />
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
