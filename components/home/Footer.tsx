
import React from 'react';
import { FacebookIcon, YoutubeIcon, InstagramIcon, PhoneIcon, MailIcon, MapPinIcon } from 'lucide-react';
import Link from 'next/link';
const Footer = () => {
  return <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Church Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-400">
              Living Life Sanctuary
            </h3>
            <p className="mb-4">
              Transforming lives through the power of {"Christ's "}love and grace.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400">
                <FacebookIcon className="h-6 w-6" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400">
                <YoutubeIcon className="h-6 w-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400">
                <InstagramIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-400">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-yellow-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/sermons" className="hover:text-yellow-400">
                  Sermons
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-yellow-400">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/ministries" className="hover:text-yellow-400">
                  Ministries
                </Link>
              </li>
              <li>
                <Link href="/donate" className="hover:text-yellow-400">
                  Give Online
                </Link>
              </li>
            </ul>
          </div>
          {/* Service Times */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-400">
              Service Times
            </h3>
            <ul className="space-y-2">
              <li>Sunday Worship: 9:00 AM & 11:00 AM</li>
              <li>Wednesday Bible Study: 6:30 PM</li>
              <li>Friday Prayer Service: 7:00 PM</li>
              <li>Youth Service: Sunday 4:00 PM</li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-400">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <PhoneIcon className="h-5 w-5 mr-2 mt-0.5 text-yellow-400" />
                <span>+254 700 123 456</span>
              </li>
              <li className="flex items-start">
                <MailIcon className="h-5 w-5 mr-2 mt-0.5 text-yellow-400" />
                <span>info@gracechurchkenya.org</span>
              </li>
              <li className="flex items-start">
                <MapPinIcon className="h-5 w-5 mr-2 mt-0.5 text-yellow-400" />
                <span>123 Faith Avenue, Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-blue-800 text-center">
          <p>
            &copy; {new Date().getFullYear()} Living Life Sanctuary. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;