import { NavProps } from './types';

export const NavLink = ({ children, href, size = 'lg' }: NavProps) => (
  <a
    href={href}
    className={
      size === 'lg'
        ? '-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-blue-800'
        : 'text-sm font-semibold leading-6 text-white'
    }
  >
    {children}
  </a>
);
