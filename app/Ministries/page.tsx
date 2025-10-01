import { ChevronRightIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
const Ministries = () => {
  const ministries = [{
    id: 1,
    name: 'Youth Ministry',
    description: 'Empowering young people to grow in their faith and develop leadership skills through Bible study, worship, and community service.',
    image: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
    leader: 'Pastor Michael Wanjiru',
    meetingTime: 'Sundays at 4:00 PM'
  }, {
    id: 2,
    name: "Women's Fellowship",
    description: 'A vibrant community of women growing together in faith, supporting one another, and serving the church and community.',
    image: 'https://images.unsplash.com/photo-1529008922463-fd89b925364e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    leader: 'Pastor Sarah Odhiambo',
    meetingTime: 'Saturdays at 2:00 PM'
  }, {
    id: 3,
    name: "Men's Fellowship",
    description: 'Building godly men through discipleship, accountability, and fellowship to become spiritual leaders in their homes and community.',
    image: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
    leader: 'Elder James Muthoni',
    meetingTime: 'Saturdays at 7:00 AM'
  }, {
    id: 4,
    name: 'Choir & Worship',
    description: "Leading the congregation in worship through music, singing, and creative arts to create an atmosphere of God's presence.",
    image: 'https://images.unsplash.com/photo-1516307029006-461b8204826f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    leader: 'Grace Njoroge',
    meetingTime: 'Rehearsals on Thursdays at 6:00 PM'
  }, {
    id: 5,
    name: 'Sunday School',
    description: 'Teaching children the Word of God through age-appropriate lessons, activities, and games to build a strong spiritual foundation.',
    image: 'https://images.unsplash.com/photo-1526634332515-d56c5fd16991?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    leader: 'Mary Kamau',
    meetingTime: 'Sundays at 9:00 AM'
  }, {
    id: 6,
    name: 'Outreach & Missions',
    description: "Sharing God's love through community service, evangelism, and mission trips both locally and internationally.",
    image: 'https://images.unsplash.com/photo-1593113630400-ea4288922497?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    leader: 'Daniel Kiprono',
    meetingTime: 'Monthly outreach events'
  }];
  return <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[300px] bg-gradient-to-r from-blue-900 to-blue-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')] bg-cover bg-center opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Ministries
          </h1>
          <p className="text-xl text-white max-w-3xl">
            Discover how you can grow, serve, and connect through our various
            ministries
          </p>
        </div>
      </section>
      {/* Ministries Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">
              Get Involved
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              At Living Life Sanctuary, we believe that every member has a unique
              role to play in God&apos;s kingdom. Our ministries provide
              opportunities for you to use your gifts, grow in your faith, and
              make a difference in our church and community.
            </p>
          </div>
        </div>
      </section>
      {/* Ministries Grid */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ministries.map(ministry => <div key={ministry.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
                <div className="h-56">
                  <Image width={1170} height={800} src={ministry.image} alt={ministry.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-blue-800 mb-2">
                    {ministry.name}
                  </h3>
                  <p className="text-yellow-600 font-medium mb-2">
                    Led by: {ministry.leader}
                  </p>
                  <p className="text-gray-700 mb-4">{ministry.description}</p>
                  <p className="text-gray-600 italic mb-4">
                    {ministry.meetingTime}
                  </p>
                  <Link href={`#${ministry.id}`} className="inline-flex items-center text-blue-800 font-semibold hover:text-blue-600">
                    Learn More
                    <ChevronRightIcon className="h-5 w-5 ml-1" />
                  </Link>
                </div>
              </div>)}
          </div>
        </div>
      </section>
      {/* Featured Ministry */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">
              Featured Ministry: Community Outreach
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image width={1170} height={800} src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Community Outreach" className="rounded-lg shadow-lg" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-blue-800 mb-4">
                Making a Difference in Our Community
              </h3>
              <p className="text-gray-700 mb-6">
                Our Community Outreach ministry is dedicated to sharing God&apos;s
                love in practical ways throughout Kenya. From food distribution
                to medical camps, education support to clean water projects, we
                aim to meet both physical and spiritual needs.
              </p>
              <p className="text-gray-700 mb-6">
                In the past year alone, our outreach teams have:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Provided meals to over 1,000 families in need</li>
                <li>Established a scholarship program for 50 children</li>
                <li>Conducted 4 medical camps serving remote communities</li>
                <li>Built 2 water wells in drought-affected areas</li>
                <li>
                  Organized weekly visits to local orphanages and hospitals
                </li>
              </ul>
              <div className="flex space-x-4">
                <Link href="/contact" className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition duration-300">
                  Get Involved
                </Link>
                <Link href="/donate" className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-md transition duration-300">
                  Support This Ministry
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Join a Ministry */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">
              Find Your Place to Serve
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              God has gifted you uniquely to serve in His kingdom. Whether
              you&apos;re passionate about teaching, music, hospitality, or missions,
              there&apos;s a place for you to use your gifts at Living Life Sanctuary.
            </p>
            <Link href="/membership" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-8 rounded-md text-lg transition duration-300">
              Join a Ministry Today
            </Link>
          </div>
        </div>
      </section>
    </div>;
};
export default Ministries;