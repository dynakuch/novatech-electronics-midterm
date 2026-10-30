import Link from 'next/link';
export default function NotFound() { return <div className="container page-space empty-state"><p className="eyebrow">404 · NOT FOUND</p><h1>We couldn't find that product.</h1><Link href="/" className="button button-primary">Return to shop</Link></div>; }
