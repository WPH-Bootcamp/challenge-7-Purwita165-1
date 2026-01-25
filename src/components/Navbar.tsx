import { useCart } from '@/features/cart/hooks';
import Link from 'next/link';

export default function Navbar() {
  const { totalQty } = useCart();

  return (
    <header className='border-b bg-white'>
      <div className='mx-auto flex max-w-7xl items-center justify-between px-6 py-5'>
        <Link href='/' className='text-2xl font-bold text-black'>
          Foody
        </Link>

        <nav className='flex items-center gap-8 text-sm font-medium text-gray-700'>
          <Link href='/' className='hover:text-red-500 transition'>
            Home
          </Link>

          <Link href='/orders' className='hover:text-red-500 transition'>
            Orders
          </Link>

          <Link href='/cart' className='relative hover:text-red-500 transition'>
            <span className='text-xl'>🛒</span>

            {totalQty > 0 && (
              <span className='absolute -top-2 -right-2 rounded-full bg-black px-2 py-0.5 text-xs text-white'>
                {totalQty}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}
