'use client';

import Link from 'next/link';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { headerImage } from '@/lib/utils';
import { PopoverGroup } from '../PopoverGroup';
import { NavLink } from '../NavLink';
import { useState } from 'react';
import { Dialog } from '../Dialog';

// TODO: continue to refactor (sep of concerns);
// TODO: tests?

export const Header = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <header className="bg-[#013B94]">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Booking.com</span>
            <img
              className="h-12 w-auto"
              src={headerImage}
              alt="" // TODO: add proper accessibility value
            />
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <PopoverGroup />

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <NavLink href="#" size="sm">
            Log in <span aria-hidden="true">&rarr;</span>
          </NavLink>
        </div>
      </nav>

      <Dialog open={open} setOpen={setOpen} />
    </header>
  );
};
