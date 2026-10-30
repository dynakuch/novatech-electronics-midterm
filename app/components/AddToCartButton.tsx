'use client';
import { useState } from 'react';
import type { Product } from '@/app/lib/products';
import { useCart } from './CartProvider';
export default function AddToCartButton({ product }: { product: Product }) { const { add } = useCart(); const [added, setAdded] = useState(false); return <button className="button button-primary" onClick={() => { add(product); setAdded(true); window.setTimeout(() => setAdded(false), 1400); }}>{added ? '✓ Added to cart' : 'Add to cart'}</button>; }
 