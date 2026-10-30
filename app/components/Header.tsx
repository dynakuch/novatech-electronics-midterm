'use client';
import Link from 'next/link';
import { useCart } from './CartProvider';
export default function Header() { const { count } = useCart(); return <header className="header"><div className="container nav"><Link href="/" className="brand"><span className="brand-icon">N</span> NOVA<span className="brand-light">TECH</span></Link><nav><Link href="/">Shop</Link><Link href="/about-us">About Us</Link><Link href="/cart" className="cart-link">Cart <span className="cart-count">{count}</span></Link></nav></div></header>; }
