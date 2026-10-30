'use client';
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { Product } from '@/app/lib/products';
export type CartItem = { product: Product; quantity: number };
type CartContextValue = { items: CartItem[]; ready: boolean; add: (product: Product, quantity?: number) => void; setQuantity: (id: string, quantity: number) => void; remove: (id: string) => void; clear: () => void; count: number; subtotal: number };
const CartContext = createContext<CartContextValue | null>(null);
export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [ready, setReady] = useState(false);
  useEffect(() => { try { const saved = localStorage.getItem('nova-cart'); if (saved) setItems(JSON.parse(saved) as CartItem[]); } catch { localStorage.removeItem('nova-cart'); } setReady(true); }, []);
  useEffect(() => { if (ready) localStorage.setItem('nova-cart', JSON.stringify(items)); }, [items, ready]);
  const add = useCallback((product: Product, quantity = 1) => setItems(old => { const found = old.find(item => item.product.id === product.id); return found ? old.map(item => item.product.id === product.id ? { ...item, quantity: item.quantity + quantity } : item) : [...old, { product, quantity }]; }), []);
  const setQuantity = useCallback((id: string, quantity: number) => setItems(old => quantity < 1 ? old.filter(item => item.product.id !== id) : old.map(item => item.product.id === id ? { ...item, quantity } : item)), []);
  const remove = useCallback((id: string) => setItems(old => old.filter(item => item.product.id !== id)), []);
  const clear = useCallback(() => setItems([]), []);
  const value = useMemo(() => ({ items, ready, add, setQuantity, remove, clear, count: items.reduce((sum, item) => sum + item.quantity, 0), subtotal: items.reduce((sum, item) => sum + item.product.price * item.quantity, 0) }), [items, ready, add, setQuantity, remove, clear]);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
export function useCart() { const value = useContext(CartContext); if (!value) throw new Error('useCart must be used inside CartProvider'); return value; }
