import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  ChatBubbleLeftIcon,
  HomeIcon,
  PaperAirplaneIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const products = [
  {
    name: "Book a Stay",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: HomeIcon,
  },
  {
    name: "Book a Flight",
    description: "Speak directly to your customers",
    href: "#",
    icon: PaperAirplaneIcon,
  },
  {
    name: "Contact our Support Team",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: ChatBubbleLeftIcon,
  },
];

export const callsToAction = [
  { name: "See Demo Booking", href: "#", icon: PlayCircleIcon },
  { name: "Contact Support", href: "#", icon: PhoneIcon },
];

export const headerImage = "https://static1.squarespace.com/static/5bde0f00c3c16aa95581e2e2/62b4cb1add9d257dd43bb03d/62b653fedc7c895918d19b24/1656116254983/booking+logo+white.png?format=1500w";