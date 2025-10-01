import { CalendarIcon, MapPinIcon, ClockIcon, ChevronRightIcon } from 'lucide-react';
import Link from 'next/link';

const Home = () => {
  return <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-blue-900 to-blue-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1438032005730-c779502df39b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')] bg-cover bg-center opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Welcome to Living Life Sanctuary
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl">
            A place of worship, fellowship, and spiritual growth in the heart of
            Kenya
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/about" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-8 rounded-md text-lg transition duration-300">
              Join Us This Sunday
            </Link>
            <Link href="/sermons" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold py-3 px-8 rounded-md text-lg transition duration-300">
              Watch Sermons
            </Link>
          </div>
        </div>
      </section>
      {/* Mission & Vision Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
              Our Mission & Vision
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To proclaim the Gospel of Jesus Christ, make disciples, and
                serve our community with love and compassion. We are committed
                to spreading {"God's"} Word throughout Kenya and beyond,
                transforming lives through faith, hope, and love.
              </p>
            </div>
            <div className="bg-green-50 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-green-700 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To be a beacon of {"God's"} light in Kenya, nurturing a community of
                believers who are grounded in faith, united in purpose, and
                actively engaged in transforming society through Christ-centered
                service and outreach.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Service Times & Location */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
              Join Us for Worship
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <ClockIcon className="h-10 w-10 text-yellow-500 mr-4" />
                <h3 className="text-2xl font-bold text-blue-800">
                  Service Times
                </h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CalendarIcon className="h-5 w-5 text-blue-800 mr-2 mt-0.5" />
                  <div>
                    <span className="font-semibold">Sunday Worship:</span> 9:00
                    AM & 11:00 AM
                  </div>
                </li>
                <li className="flex items-start">
                  <CalendarIcon className="h-5 w-5 text-blue-800 mr-2 mt-0.5" />
                  <div>
                    <span className="font-semibold">
                      Wednesday Bible Study:
                    </span>{' '}
                    6:30 PM
                  </div>
                </li>
                <li className="flex items-start">
                  <CalendarIcon className="h-5 w-5 text-blue-800 mr-2 mt-0.5" />
                  <div>
                    <span className="font-semibold">
                      Friday Prayer Service:
                    </span>{' '}
                    7:00 PM
                  </div>
                </li>
                <li className="flex items-start">
                  <CalendarIcon className="h-5 w-5 text-blue-800 mr-2 mt-0.5" />
                  <div>
                    <span className="font-semibold">Youth Service:</span> Sunday
                    4:00 PM
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <MapPinIcon className="h-10 w-10 text-yellow-500 mr-4" />
                <h3 className="text-2xl font-bold text-blue-800">
                  Our Location
                </h3>
              </div>
              <p className="mb-4">123 Faith Avenue, Nairobi, Kenya</p>
              <div className="h-64 bg-gray-200 rounded-md overflow-hidden">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127641.21836815347!2d36.76699260000001!3d-1.2920658999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1653051691498!5m2!1sen!2sus" width="100%" height="100%" style={{
                border: 0
              }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Church Location"></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Livestream/Sermon Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
              Latest Sermon
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch our latest sermon and be blessed by the Word of God
            </p>
          </div>
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">

          </div>
          <div className="mt-8 text-center">
            <Link href="/sermons" className="inline-flex items-center text-blue-800 font-semibold hover:text-blue-600">
              View All Sermons
              <ChevronRightIcon className="h-5 w-5 ml-1" />
            </Link>
          </div>
        </div>
      </section>
      {/* Upcoming Events */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
              Upcoming Events
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Event 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-[url('https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')] bg-cover bg-center"></div>
              <div className="p-6">
                <div className="flex items-center text-yellow-500 mb-2">
                  <CalendarIcon className="h-5 w-5 mr-2" />
                  <span>June 15, 2023 | 6:00 PM</span>
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">
                  Annual Worship Night
                </h3>
                <p className="text-gray-600 mb-4">
                  Join us for a night of worship, prayer, and fellowship as we
                  come together to praise God.
                </p>
                <Link href="/events" className="text-blue-800 font-semibold hover:text-blue-600">
                  Learn More
                </Link>
              </div>
            </div>
            {/* Event 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-[url('https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')] bg-cover bg-center"></div>
              <div className="p-6">
                <div className="flex items-center text-yellow-500 mb-2">
                  <CalendarIcon className="h-5 w-5 mr-2" />
                  <span>June 25, 2023 | 10:00 AM</span>
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">
                  Community Outreach
                </h3>
                <p className="text-gray-600 mb-4">
                  Serve with us as we reach out to our local community with
                  food, clothing, and the message of hope.
                </p>
                <Link href="/events" className="text-blue-800 font-semibold hover:text-blue-600">
                  Learn More
                </Link>
              </div>
            </div>
            {/* Event 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-[url('https://images.unsplash.com/photo-1472653431158-6364773b2a56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80')] bg-cover bg-center"></div>
              <div className="p-6">
                <div className="flex items-center text-yellow-500 mb-2">
                  <CalendarIcon className="h-5 w-5 mr-2" />
                  <span>July 10, 2023 | 9:00 AM</span>
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">
                  Youth Conference
                </h3>
                <p className="text-gray-600 mb-4">
                  A special conference for young people to grow in their faith
                  and connect with other believers.
                </p>
                <Link href="/events" className="text-blue-800 font-semibold hover:text-blue-600">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-10 text-center">
            <Link href="/events" className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md text-lg transition duration-300">
              View All Events
            </Link>
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-900 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Become Part of Our Church Family
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join us in worship, fellowship, and service as we grow together in
            faith and love.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/membership" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-8 rounded-md text-lg transition duration-300">
              Become a Member
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold py-3 px-8 rounded-md text-lg transition duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>;
};
export default Home;