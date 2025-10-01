export const getYouTubeVideoId = (url: string): string | null => {
  const regex = /[?&]v=([^&#]*)/;
  const match = url.match(regex);
  return match ? match[1] : null;
};import Image from 'next/image';
import Link from 'next/link';
const About = () => {
  return <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-r from-blue-900 to-blue-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1601455763557-db1bea8a9a5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')] bg-cover bg-center opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Our Church
          </h1>
          <p className="text-xl text-white max-w-3xl">
            Learn about our history, beliefs, and the leadership team guiding
            our congregation
          </p>
        </div>
      </section>
      {/* Our History */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">
              Our History
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Living Life Sanctuary was founded in 1985 by Pastor James Mwangi
                and a small group of dedicated believers with a vision to
                establish a Christ-centered community in the heart of Kenya.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Starting with just 20 members gathering in a small rented hall,
                the church has grown to a congregation of over 2,000 members
                today. Through faith, perseverance, and {"God's"} grace, we were
                able to build our current sanctuary in 2005, which stands as a
                beacon of hope in our community.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Over the years, we have established various ministries to serve
                our community, including outreach programs, youth development
                initiatives, and mission work across Kenya and neighboring
                countries.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image width={100} height={100} src="https://images.unsplash.com/photo-1517685352821-92cf88aee5a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" alt="Church History" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>
      {/* Our Beliefs */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">
              Our Beliefs
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-800 mb-3">
                The Bible
              </h3>
              <p className="text-gray-700">
                We believe the Bible is {"God's"} Word, fully inspired and without
                error, written under the inspiration of the Holy Spirit, and has
                supreme authority in all matters of faith and conduct.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-800 mb-3">God</h3>
              <p className="text-gray-700">
                We believe in one God, Creator of all things, infinitely perfect
                and eternally existing in three persons: Father, Son, and Holy
                Spirit.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-800 mb-3">
                Jesus Christ
              </h3>
              <p className="text-gray-700">
                We believe Jesus Christ is true God and true man, conceived by
                the Holy Spirit and born of the Virgin Mary. He died on the
                cross as a sacrifice for our sins and rose bodily from the dead
                for our justification.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-800 mb-3">
                Holy Spirit
              </h3>
              <p className="text-gray-700">
                We believe the Holy Spirit indwells all believers, empowering
                them for service and transforming them into the likeness of
                Christ.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-800 mb-3">
                Salvation
              </h3>
              <p className="text-gray-700">
                We believe salvation is a gift from God received through faith
                in Jesus Christ alone, not by works, so that no one may boast.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-800 mb-3">
                The Church
              </h3>
              <p className="text-gray-700">
                We believe the Church is the body of Christ, composed of all who
                trust in Jesus Christ for salvation, with the mission to worship
                God and make disciples of all nations.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Leadership Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">
              Our Leadership Team
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Senior Pastor */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <Image width={100} height={100} src="https://images.unsplash.com/photo-1556157382-97eda2f9296e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Senior Pastor" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-800 mb-1">
                  Pastor David Kimani
                </h3>
                <p className="text-yellow-600 font-medium mb-4">
                  Senior Pastor
                </p>
                <p className="text-gray-700 mb-4">
                  Pastor David has led our congregation for over 15 years with
                  wisdom, compassion, and a deep love for {"God's"} Word.
                </p>
              </div>
            </div>
            {/* Associate Pastor */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <Image width={100} height={100} src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Associate Pastor" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-800 mb-1">
                  Pastor Sarah Odhiambo
                </h3>
                <p className="text-yellow-600 font-medium mb-4">
                  Associate Pastor
                </p>
                <p className="text-gray-700 mb-4">
                  Pastor Sarah oversees our {"children's"} ministry and {"women's"}
                  fellowship, bringing energy and creativity to our church
                  family.
                </p>
              </div>
            </div>
            {/* Youth Pastor */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <Image width={100} height={100} src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Youth Pastor" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-800 mb-1">
                  Pastor Michael Wanjiru
                </h3>
                <p className="text-yellow-600 font-medium mb-4">Youth Pastor</p>
                <p className="text-gray-700 mb-4">
                  Pastor Michael leads our vibrant youth ministry, mentoring the
                  next generation of believers with passion and dedication.
                </p>
              </div>
            </div>
            {/* Elder */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <Image width={100} height={100} src="https://images.unsplash.com/photo-1542206395-9feb3edaa68d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80" alt="Elder" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-800 mb-1">
                  Elder James Muthoni
                </h3>
                <p className="text-yellow-600 font-medium mb-4">Head Elder</p>
                <p className="text-gray-700 mb-4">
                  Elder James brings wisdom and experience to our leadership
                  team, having served the church for over 25 years.
                </p>
              </div>
            </div>
            {/* Worship Director */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <Image width={100} height={100} src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="Worship Director" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-800 mb-1">
                  Grace Njoroge
                </h3>
                <p className="text-yellow-600 font-medium mb-4">
                  Worship Director
                </p>
                <p className="text-gray-700 mb-4">
                  Grace leads our worship ministry with a heart for {"God's"}
                  presence and a gift for bringing people into authentic
                  worship.
                </p>
              </div>
            </div>
            {/* Missions Coordinator */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <Image width={100} height={100} src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="Missions Coordinator" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-800 mb-1">
                  Daniel Kiprono
                </h3>
                <p className="text-yellow-600 font-medium mb-4">
                  Missions Coordinator
                </p>
                <p className="text-gray-700 mb-4">
                  Daniel coordinates our local and international mission
                  efforts, connecting our church with communities in need.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-16 bg-blue-800 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Join Us This Sunday</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            {"We'd"} love to welcome you to our church family. Come experience the
            warmth of our community and the power of {"God's"} presence.
          </p>
          <Link href="/contact" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-8 rounded-md text-lg transition duration-300">
            Plan Your Visit
          </Link>
        </div>
      </section>
    </div>;
};
export default About;