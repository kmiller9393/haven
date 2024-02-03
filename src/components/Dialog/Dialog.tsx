import { XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Dialog as HeadlessDialog, Disclosure } from '@headlessui/react';
import { cn } from '@/lib/utils';
import { NavLink } from '../NavLink';
import { callsToAction, products } from '../PopoverGroup/utils';
import { DialogProps } from './types';
import { headerImage } from '@/data/headerImage';

export const Dialog = ({ open, setOpen }: DialogProps) => (
  <HeadlessDialog as="div" className="lg:hidden" open={open} onClose={setOpen}>
    <div className="fixed inset-0 z-10" />

    <HeadlessDialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#013B94] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
      <div className="flex items-center justify-between">
        <a href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">Booking.com</span>
          <img
            className="h-8 w-auto"
            src={headerImage}
            alt="" // TODO: add proper accessibility value
          />
        </a>
        <button
          type="button"
          className="-m-2.5 rounded-md p-2.5 text-white"
          onClick={() => setOpen(false)}
        >
          <span className="sr-only">Close menu</span>
          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      <div className="mt-6 flow-root">
        <div className="-my-6 divide-y divide-gray-500/10">
          <div className="space-y-2 py-6">
            <Disclosure as="div" className="-mx-3">
              {({ open }: any) => (
                <>
                  <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white hover:bg-blue-800">
                    Stays
                    <ChevronDownIcon
                      className={cn(
                        open ? 'rotate-180' : '',
                        'h-5 w-5 flex-none',
                      )}
                      aria-hidden="true"
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="mt-2 space-y-2">
                    {[...products, ...callsToAction].map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-blue-800"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <NavLink href="#">Flights</NavLink>
            <NavLink href="#">Car Rentals</NavLink>
            <NavLink href="#">Attractions</NavLink>
            <NavLink href="#">Flight + Hotel</NavLink>
          </div>

          <div className="py-6">
            <a
              href="#"
              className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-blue-800"
            >
              Log In
            </a>
          </div>
        </div>
      </div>
    </HeadlessDialog.Panel>
  </HeadlessDialog>
);
