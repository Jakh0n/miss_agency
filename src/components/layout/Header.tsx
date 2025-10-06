'use client'

import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	const navItems = [
		{ href: '#about', label: 'Biz Haqimizda' },
		{ href: '#services', label: 'Xizmatlar' },
		{ href: '#universities', label: 'Universitetlar' },
		{ href: '#testimonials', label: 'Muvaffaqiyat Hikoyalari' },
		{ href: '#contact', label: "Bog'lanish" },
	]

	return (
		<header className='fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex justify-between items-center h-16'>
					{/* Logo */}
					<Link href='/' className='flex items-center space-x-2'>
						<Image
							src='/logo.jpg'
							alt='Miss Twins'
							width={36}
							height={36}
							className='rounded-full'
						/>
						<span className='text-xl font-bold text-red-900 '>
							Miss<span className='text-blue-600'>Twins</span>
						</span>
					</Link>

					{/* Desktop Navigation */}
					<nav className='hidden md:flex items-center space-x-8'>
						{navItems.map(item => (
							<Link
								key={item.href}
								href={item.href}
								className='text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium'
							>
								{item.label}
							</Link>
						))}
					</nav>

					{/* CTA Button */}
					<div className='hidden md:flex items-center space-x-4'>
						<Button asChild className='bg-blue-600 hover:bg-blue-700'>
							<Link href='#contact'>Aloqaga Chiqish</Link>
						</Button>
					</div>

					{/* Mobile menu button */}
					<button
						onClick={toggleMenu}
						className='md:hidden p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100'
					>
						{isMenuOpen ? (
							<X className='h-6 w-6' />
						) : (
							<Menu className='h-6 w-6' />
						)}
					</button>
				</div>

				{/* Mobile Navigation */}
				{isMenuOpen && (
					<div className='md:hidden'>
						<div className='px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200'>
							{navItems.map(item => (
								<Link
									key={item.href}
									href={item.href}
									className='block px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md font-medium'
									onClick={() => setIsMenuOpen(false)}
								>
									{item.label}
								</Link>
							))}
							<div className='pt-4'>
								<Button
									asChild
									className='w-full bg-blue-600 hover:bg-blue-700'
								>
									<Link href='#contact'>Boshlash</Link>
								</Button>
							</div>
						</div>
					</div>
				)}
			</div>
		</header>
	)
}

export default Header
