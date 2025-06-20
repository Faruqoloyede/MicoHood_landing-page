import { MdOutlineMessage } from "react-icons/md";
import { IoStorefrontSharp } from "react-icons/io5";
import { AiOutlineSafety } from "react-icons/ai";
import { FaLinkedinIn, FaXTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa6';

export const nav_items = [
    {
        id: 'home',
        title: 'Home',
    },
    {
        id: 'feature',
        title: 'Features',
    },
    {
        id: 'contact',
        title: 'Contact',
    },
]

export const features = [
    {
        id: 'feat_1',
        icon: <MdOutlineMessage />,
        title: "Local Updates",
        content: "Stay updated with what's happening around you—from events to news."
    },
    {
        id: 'feat_2',
        icon: <IoStorefrontSharp />,
        title: "Business Listings",
        content: "Discover and support local shops, services, and home businesses."
    },
    {
        id: 'feat_3',
        icon: <AiOutlineSafety />,
        title: "Safety Tips",
        content: "Get tips and alerts to help keep your community safe."
    },
]

export const social_media = [
    {
        id: 1,
        icon: <FaLinkedinIn />,
        href: '/'
    },
    {
        id: 2,
        icon: <FaXTwitter />,
        href: '/'
    },
    {
        id: 3,
        icon: <FaInstagram />,
        href: '/'
    },
    {
        id: 4,
        icon: <FaFacebookF />,
        href: '/'
    },
]