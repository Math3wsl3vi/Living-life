import React, { useState } from 'react';
import { CalendarIcon, MapPinIcon, ClockIcon, ShareIcon } from 'lucide-react';
import Image from 'next/image';
const Events = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  // Mock event data
  const upcomingEvents = [{
    id: 1,
    title: 'Annual Worship Night',
    date: 'June 15, 2023',
    time: '6:00 PM - 9:00 PM',
    location: 'Main Sanctuary',
    description: 'Join us for a night of worship, prayer, and fellowship as we come together to praise God and seek His presence.',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  }, {
    id: 2,
    title: 'Community Outreach',
    date: 'June 25, 2023',
    time: '10:00 AM - 2:00 PM',
    location: 'Kibera Community Center',
    description: 'Serve with us as we reach out to our local community with food, clothing, and the message of hope.',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  }, {
    id: 3,
    title: 'Youth Conference',
    date: 'July 10-12, 2023',
    time: '9:00 AM - 5:00 PM',
    location: 'Church Youth Center',
    description: 'A special three-day conference for young people to grow in their faith and connect with other believers.',
    image: 'https://images.unsplash.com/photo-1472653431158-6364773b2a56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80'
  }, {
    id: 4,
    title: 'Marriage Enrichment Retreat',
    date: 'July 29-30, 2023',
    time: 'Friday 4:00 PM - Saturday 5:00 PM',
    location: 'Naivasha Retreat Center',
    description: 'A weekend retreat designed to strengthen marriages through biblical teaching, couple exercises, and fellowship.',
    image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  }, {
    id: 5,
    title: 'Vacation Bible School',
    date: 'August 7-11, 2023',
    time: '8:00 AM - 12:00 PM',
    location: 'Church Campus',
    description: 'A fun-filled week of Bible stories, songs, crafts, and games for children ages 4-12.',
    image: 'https://images.unsplash.com/photo-1511205876834-9c5e79aa5c61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  }, {
    id: 6,
    title: 'Leadership Conference',
    date: 'August 26, 2023',
    time: '9:00 AM - 4:00 PM',
    location: 'Main Sanctuary',
    description: 'A one-day conference focused on developing biblical leadership skills for ministry and everyday life.',
    image: 'https://images.unsplash.com/photo-1544928147-79a2dbc1f389?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  }];
  const pastEvents = [{
    id: 7,
    title: 'Easter Celebration',
    date: 'April 9, 2023',
    time: '9:00 AM & 11:00 AM',
    location: 'Main Sanctuary',
    description: 'A special service celebrating the resurrection of Jesus Christ with worship, drama, and a powerful message.',
    image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  }, {
    id: 8,
    title: "Women's Conference",
    date: 'March 18, 2023',
    time: '9:00 AM - 3:00 PM',
    location: 'Main Sanctuary',
    description: 'A day of inspiration, worship, and fellowship designed to empower and encourage women in their faith journey.',
    image: 'https://images.unsplash.com/photo-1543269664-56d93c1b41a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  }, {
    id: 9,
    title: "Men's Breakfast",
    date: 'February 25, 2023',
    time: '7:00 AM - 9:00 AM',
    location: 'Church Fellowship Hall',
    description: 'A time of fellowship, good food, and spiritual encouragement for men of all ages.',
    image: 'https://images.unsplash.com/photo-1536746803623-cef87080bfc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  }];
  // Determine which events to display based on active tab
  const displayEvents = activeTab === 'upcoming' ? upcomingEvents : pastEvents;
  return <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[300px] bg-gradient-to-r from-blue-900 to-blue-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80')] bg-cover bg-center opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Events & Announcements
          </h1>
          <p className="text-xl text-white max-w-3xl">
            Stay connected with {"what's"} happening at Living Life Sanctuary
          </p>
        </div>
      </section>
      {/* Events Tabs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-md shadow-sm">
              <button onClick={() => setActiveTab('upcoming')} className={`px-6 py-3 text-lg font-medium rounded-l-md ${activeTab === 'upcoming' ? 'bg-blue-800 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}>
                Upcoming Events
              </button>
              <button onClick={() => setActiveTab('past')} className={`px-6 py-3 text-lg font-medium rounded-r-md ${activeTab === 'past' ? 'bg-blue-800 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}>
                Past Events
              </button>
            </div>
          </div>
          {/* Featured Event */}
          {activeTab === 'upcoming' && <div className="mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-blue-50 rounded-lg overflow-hidden shadow-lg">
                <div className="h-[400px]">
                  <Image width={200} height={200} src={upcomingEvents[0].image} alt={upcomingEvents[0].title} className="w-full h-full object-cover" />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="inline-block bg-yellow-500 text-blue-900 px-4 py-1 rounded-full text-sm font-bold mb-4">
                    Featured Event
                  </div>
                  <h2 className="text-3xl font-bold text-blue-800 mb-4">
                    {upcomingEvents[0].title}
                  </h2>
                  <div className="flex items-center mb-3">
                    <CalendarIcon className="h-5 w-5 text-blue-800 mr-2" />
                    <span className="text-gray-700">
                      {upcomingEvents[0].date}
                    </span>
                  </div>
                  <div className="flex items-center mb-3">
                    <ClockIcon className="h-5 w-5 text-blue-800 mr-2" />
                    <span className="text-gray-700">
                      {upcomingEvents[0].time}
                    </span>
                  </div>
                  <div className="flex items-center mb-6">
                    <MapPinIcon className="h-5 w-5 text-blue-800 mr-2" />
                    <span className="text-gray-700">
                      {upcomingEvents[0].location}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-8">
                    {upcomingEvents[0].description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition duration-300">
                      Register Now
                    </button>
                    <button className="flex items-center justify-center bg-white hover:bg-gray-100 text-blue-800 font-bold py-3 px-6 rounded-md border border-blue-800 transition duration-300">
                      <ShareIcon className="h-5 w-5 mr-2" />
                      Share Event
                    </button>
                  </div>
                </div>
              </div>
            </div>}
          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Skip the first event in upcoming events since it's featured */}
            {displayEvents === upcomingEvents ? displayEvents.slice(1).map(event => <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
                    <div className="h-48">
                      <Image width={200} height={200} src={event.image} alt={event.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-blue-800 mb-3">
                        {event.title}
                      </h3>
                      <div className="flex items-center mb-2">
                        <CalendarIcon className="h-5 w-5 text-blue-800 mr-2" />
                        <span className="text-gray-700">{event.date}</span>
                      </div>
                      <div className="flex items-center mb-2">
                        <ClockIcon className="h-5 w-5 text-blue-800 mr-2" />
                        <span className="text-gray-700">{event.time}</span>
                      </div>
                      <div className="flex items-center mb-4">
                        <MapPinIcon className="h-5 w-5 text-blue-800 mr-2" />
                        <span className="text-gray-700">{event.location}</span>
                      </div>
                      <p className="text-gray-700 mb-6">{event.description}</p>
                      <button className="w-full bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300">
                        Learn More
                      </button>
                    </div>
                  </div>) : displayEvents.map(event => <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
                    <div className="h-48">
                      <Image width={200} height={200} src={event.image} alt={event.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-blue-800 mb-3">
                        {event.title}
                      </h3>
                      <div className="flex items-center mb-2">
                        <CalendarIcon className="h-5 w-5 text-blue-800 mr-2" />
                        <span className="text-gray-700">{event.date}</span>
                      </div>
                      <div className="flex items-center mb-2">
                        <ClockIcon className="h-5 w-5 text-blue-800 mr-2" />
                        <span className="text-gray-700">{event.time}</span>
                      </div>
                      <div className="flex items-center mb-4">
                        <MapPinIcon className="h-5 w-5 text-blue-800 mr-2" />
                        <span className="text-gray-700">{event.location}</span>
                      </div>
                      <p className="text-gray-700 mb-6">{event.description}</p>
                      <button className="w-full bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md transition duration-300">
                        View Photos
                      </button>
                    </div>
                  </div>)}
          </div>
        </div>
      </section>
      {/* Announcements */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">
              Weekly Announcements
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">
                  Special Guest Speaker
                </h3>
                <p className="text-gray-700">
                  {"We're"} excited to welcome Pastor Emmanuel Mbogo from Tanzania
                  who will be our guest speaker next Sunday. Come prepared for a
                  powerful message on &quot;Faith That Moves Mountains.&quot;
                </p>
              </div>
              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-xl font-bold text-blue-800 mb-2">
                  Choir Recruitment
                </h3>
                <p className="text-gray-700">
                  Our worship team is looking for new members! If you have a
                  passion for worship and musical talent, please see Grace after
                  the service or email worship@gracechurchkenya.org.
                </p>
              </div>
              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-xl font-bold text-blue-800 mb-2">
                  {"Children's"} Ministry Volunteers Needed
                </h3>
                <p className="text-gray-700">
                  Our growing {"children's"} ministry needs additional volunteers to
                  serve on Sundays. Training will be provided. Please contact
                  Mary at children@gracechurchkenya.org if {"you're"} interested.
                </p>
              </div>
              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-xl font-bold text-blue-800 mb-2">
                  Building Fund Update
                </h3>
                <p className="text-gray-700">
                  {"We've"} reached 75% of our goal for the new youth center! Thank
                  you for your generous giving. Construction is scheduled to
                  begin next month.
                </p>
              </div>
              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-xl font-bold text-blue-800 mb-2">
                  Prayer Meeting Schedule Change
                </h3>
                <p className="text-gray-700">
                  Starting next week, our Friday prayer meeting will begin at
                  6:30 PM instead of 7:00 PM. Join us as we seek {"God's"} presence
                  together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Calendar Download */}
      <section className="py-16 bg-blue-800 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Never miss an important church event. Download our calendar or
            subscribe to receive email updates.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white hover:bg-gray-100 text-blue-800 font-bold py-3 px-8 rounded-md flex items-center justify-center">
              <CalendarIcon className="h-5 w-5 mr-2" />
              Download Calendar
            </button>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-8 rounded-md flex items-center justify-center">
              Subscribe to Updates
            </button>
          </div>
        </div>
      </section>
    </div>;
};
export default Events;