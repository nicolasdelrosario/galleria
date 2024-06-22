import { metadata } from './metadata'
import { Noto_Sans_Georgian, Playfair_Display } from 'next/font/google'
import { NavBar } from '@/components'

import '@/styles/index.css'

export { metadata }

const notoSansGeorgian = Noto_Sans_Georgian({
	weight: ['400', '500', '700'],
	subsets: ['latin', 'georgian'],
	variable: '--font-noto-sans-georgian',
})

const playfairDisplay = Playfair_Display({
	weight: ['400', '600', '700'],
	subsets: ['latin'],
	variable: '--font-playfair-display',
})

interface RootLayoutProps {
	children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang='en' data-theme='light'>
			<body
				className={`${notoSansGeorgian.variable} ${playfairDisplay.variable}`}
			>
				<NavBar />
				<main>{children}</main>
			</body>
		</html>
	)
}
