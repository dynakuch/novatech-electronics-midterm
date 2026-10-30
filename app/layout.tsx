import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from './components/CartProvider';
import Header from './components/Header';
export const metadata: Metadata = { title: 'NovaTech | Electronics Store', description: 'A student e-commerce project demonstrating SSR and SSG with Next.js.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body><CartProvider><Header/><main>{children}</main><footer className="footer"><div className="container footer-inner"><span>© 2026 NovaTech Electronics</span><span>Student midterm project · Next.js SSR + SSG</span></div></footer></CartProvider></body></html>; }
