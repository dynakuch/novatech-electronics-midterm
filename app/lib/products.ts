export type Product = { id: string; name: string; category: string; price: number; description: string; image: string; badge?: string };

export const products: Product[] = [
  { id: 'laptop-pro', name: 'NovaBook Pro 15', category: 'Computers', price: 799, description: 'A fast everyday laptop with a vivid 15-inch display, comfortable keyboard, and long battery life.', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=85', badge: 'Popular' },
  { id: 'smartphone-x', name: 'Pulse X Smartphone', category: 'Phones', price: 429, description: 'A bright edge-to-edge display, sharp camera, and all-day battery in a slim design.', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=85', badge: 'New' },
  { id: 'headphones', name: 'QuietBeat Headphones', category: 'Audio', price: 89, description: 'Comfortable over-ear headphones with rich sound and a foldable travel-friendly design.', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=85' },
  { id: 'mouse', name: 'Swift Wireless Mouse', category: 'Accessories', price: 24, description: 'A precise wireless mouse with a quiet click, ergonomic shape, and adjustable sensitivity.', image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=900&q=85' },
  { id: 'keyboard', name: 'MechType Keyboard', category: 'Accessories', price: 59, description: 'A sturdy mechanical keyboard with responsive keys for work, study, and gaming.', image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=85' },
  { id: 'monitor', name: 'ViewMax 27 Monitor', category: 'Computers', price: 219, description: 'A crisp 27-inch monitor that gives you more room for multitasking, design, and entertainment.', image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=900&q=85' },
  { id: 'usb-hub', name: 'Connect USB-C Hub', category: 'Accessories', price: 35, description: 'Expand your laptop connectivity with a compact hub for your everyday devices.', image: 'https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=900&q=85' },
  { id: 'webcam', name: 'ClearView Webcam', category: 'Accessories', price: 49, description: 'A simple HD webcam for online classes, meetings, and calls with friends.', image: 'https://images.unsplash.com/photo-1587826080692-f439cd0b70da?auto=format&fit=crop&w=900&q=85' },
  { id: 'power-bank', name: 'GoCharge Power Bank', category: 'Power', price: 29, description: 'A portable battery pack to help keep your phone and small devices charged while away from a socket.', image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=900&q=85' },
  { id: 'speaker', name: 'Boom Mini Speaker', category: 'Audio', price: 45, description: 'A compact Bluetooth speaker with clear sound for your desk, room, or small get-togethers.', image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=85' }
];

export function money(amount: number) { return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount); }
export function getProduct(id: string) { return products.find((product) => product.id === id); }
