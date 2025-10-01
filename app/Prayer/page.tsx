"use client"
import Image from 'next/image';
import  { useState } from 'react';
const Prayer = () => {
  const [submitted, setSubmitted] = useState(false);
  const [prayerType, setPrayerType] = useState('personal');
  const [isConfidential, setIsConfidential] = useState(false);
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Here you would normally handle the form submission
    // For demo purposes, we'll just show the success message
    setSubmitted(true);
    // Reset form after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
      // Reset form fields here
    }, 5000);
  };
  return <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[300px] bg-gradient-to-r from-blue-900 to-blue-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80')] bg-cover bg-center opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Prayer Requests
          </h1>
          <p className="text-xl text-white max-w-3xl">
            Cast your cares on the Lord, for He cares for you
          </p>
        </div>
      </section>
      {/* Prayer Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">
              We Are Here to Pray With You
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Prayer is at the heart of our church community. We believe in the
              power of prayer and are committed to bringing your needs before
              God. Submit your prayer requests below, and our prayer team will
              faithfully intercede on your behalf.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-blue-50 p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <svg className="h-10 w-10 text-blue-800" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-800 mb-3">
                Confidential Prayer
              </h3>
              <p className="text-gray-700">
                Your prayer request can be kept confidential and shared only
                with our pastoral team if you prefer.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <svg className="h-10 w-10 text-blue-800" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-800 mb-3">
                Prayer Team
              </h3>
              <p className="text-gray-700">
                Our dedicated prayer team meets weekly to pray over requests
                submitted by our church family and community.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <svg className="h-10 w-10 text-blue-800" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-800 mb-3">
                Follow-Up Support
              </h3>
              <p className="text-gray-700">
                If you&quot;d like, a member of our pastoral team can follow up with
                you personally to provide additional support.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Prayer Request Form */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-blue-800 p-6 text-white text-center">
              <h2 className="text-2xl font-bold">Submit Your Prayer Request</h2>
              <p className="mt-2">
                We are honored to pray with you and for you
              </p>
            </div>
            {submitted ? <div className="p-10 text-center">
                <div className="bg-green-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <svg className="h-10 w-10 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-green-600 mb-4">
                  Prayer Request Submitted
                </h3>
                <p className="text-gray-700 mb-6">
                  Thank you for sharing your prayer request. Our prayer team
                  will be praying for you. May God&quot;s peace and comfort be with
                  you during this time.
                </p>
                <button onClick={() => setSubmitted(false)} className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition duration-300">
                  Submit Another Request
                </button>
              </div> : <form onSubmit={handleSubmit} className="p-6 md:p-10">
                {/* Prayer Request Type */}
                <div className="mb-8">
                  <label className="block text-gray-700 font-bold mb-4">
                    Type of Prayer Request
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <button type="button" onClick={() => setPrayerType('personal')} className={`py-3 px-4 rounded-md border ${prayerType === 'personal' ? 'border-blue-800 bg-blue-50 text-blue-800' : 'border-gray-300 bg-white text-gray-700'} font-medium`}>
                      Personal
                    </button>
                    <button type="button" onClick={() => setPrayerType('family')} className={`py-3 px-4 rounded-md border ${prayerType === 'family' ? 'border-blue-800 bg-blue-50 text-blue-800' : 'border-gray-300 bg-white text-gray-700'} font-medium`}>
                      Family
                    </button>
                    <button type="button" onClick={() => setPrayerType('other')} className={`py-3 px-4 rounded-md border ${prayerType === 'other' ? 'border-blue-800 bg-blue-50 text-blue-800' : 'border-gray-300 bg-white text-gray-700'} font-medium`}>
                      Other
                    </button>
                  </div>
                </div>
                {/* Personal Information */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-gray-700 mb-4">
                    Your Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="firstName" className="block text-gray-700 mb-2">
                        First Name
                      </label>
                      <input type="text" id="firstName" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input type="text" id="lastName" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input type="email" id="email" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input type="tel" id="phone" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                </div>
                {/* Prayer Request Details */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-gray-700 mb-4">
                    Prayer Request Details
                  </h3>
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-gray-700 mb-2">
                      Subject
                    </label>
                    <input type="text" id="subject" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Brief description of prayer need" required />
                  </div>
                  <div>
                    <label htmlFor="request" className="block text-gray-700 mb-2">
                      Request Details
                    </label>
                    <textarea id="request" rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Please share the details of your prayer request..." required></textarea>
                  </div>
                </div>
                {/* Preferences */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-gray-700 mb-4">
                    Preferences
                  </h3>
                  <div className="flex items-center mb-4">
                    <input type="checkbox" id="confidential" className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" checked={isConfidential} onChange={() => setIsConfidential(!isConfidential)} />
                    <label htmlFor="confidential" className="ml-2 block text-gray-700">
                      Keep this request confidential (only shared with pastoral
                      staff)
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="followup" className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                    <label htmlFor="followup" className="ml-2 block text-gray-700">
                      I would like someone to follow up with me about this
                      request
                    </label>
                  </div>
                </div>
                {/* Submit Button */}
                <button type="submit" className="w-full bg-blue-800 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded-md transition duration-300">
                  Submit Prayer Request
                </button>
              </form>}
          </div>
        </div>
      </section>
      {/* Prayer Ministry */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">
              Our Prayer Ministry
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image width={1170} height={800} src="https://images.unsplash.com/photo-1476820865390-c52aeebb9891?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Prayer Ministry" className="rounded-lg shadow-lg" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-blue-800 mb-4">
                The Power of Prayer
              </h3>
              <p className="text-gray-700 mb-6">
                At Living Life Sanctuary, we believe in the transformative power of
                prayer. Our prayer ministry is dedicated to interceding for the
                needs of our congregation, community, and world. We have seen
                God work miracles in response to the faithful prayers of His
                people.
              </p>
              <h4 className="text-xl font-bold text-blue-800 mb-3">
                Prayer Opportunities
              </h4>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>
                  <span className="font-medium">Prayer Team:</span> Join our
                  team that prays over submitted requests
                </li>
                <li>
                  <span className="font-medium">Friday Prayer Service:</span>{' '}
                  Weekly gathering for corporate prayer at 7:00 PM
                </li>
                <li>
                  <span className="font-medium">Pre-Service Prayer:</span>{' '}
                  Sunday mornings at 8:15 AM before first service
                </li>
                <li>
                  <span className="font-medium">Prayer Chain:</span> Emergency
                  prayer network activated for urgent needs
                </li>
                <li>
                  <span className="font-medium">Prayer Partners:</span>{' '}
                  One-on-one prayer support and accountability
                </li>
              </ul>
              <div className="flex space-x-4">
                <button className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition duration-300">
                  Join Prayer Team
                </button>
                <button className="bg-transparent border-2 border-blue-800 text-blue-800 hover:bg-blue-50 font-bold py-3 px-6 rounded-md transition duration-300">
                  Prayer Resources
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Scripture Encouragement */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">
              Scriptures on Prayer
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 italic mb-4">
                &quot;Do not be anxious about anything, but in every situation, by
                prayer and petition, with thanksgiving, present your requests to
                God. And the peace of God, which transcends all understanding,
                will guard your hearts and your minds in Christ Jesus.&quot;
              </p>
              <p className="text-blue-800 font-bold">Philippians 4:6-7</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 italic mb-4">
                &quot;This is the confidence we have in approaching God: that if we
                ask anything according to his will, he hears us. And if we know
                that he hears us—whatever we ask—we know that we have what we
                asked of him.&quot;
              </p>
              <p className="text-blue-800 font-bold">1 John 5:14-15</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 italic mb-4">
                &quot;Call to me and I will answer you and tell you great and
                unsearchable things you do not know.&quot;
              </p>
              <p className="text-blue-800 font-bold">Jeremiah 33:3</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 italic mb-4">
                &quot;And pray in the Spirit on all occasions with all kinds of
                prayers and requests. With this in mind, be alert and always
                keep on praying for all the Lord&quot;s people.&quot;
              </p>
              <p className="text-blue-800 font-bold">Ephesians 6:18</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 italic mb-4">
                &quot;Therefore I tell you, whatever you ask for in prayer, believe
                that you have received it, and it will be yours.&quot;
              </p>
              <p className="text-blue-800 font-bold">Mark 11:24</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 italic mb-4">
                &quot;Rejoice always, pray continually, give thanks in all
                circumstances; for this is God&quot;s will for you in Christ Jesus.&quot;
              </p>
              <p className="text-blue-800 font-bold">1 Thessalonians 5:16-18</p>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonies */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Prayer Testimonies</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-900 p-6 rounded-lg">
              <p className="italic mb-6">
                &quot;After months of unemployment, I submitted a prayer request for
                a job. Within two weeks, I received three job offers. God&quot;s
                timing is perfect!&quot;
              </p>
              <p className="font-bold">— John M., Church Member</p>
            </div>
            <div className="bg-blue-900 p-6 rounded-lg">
              <p className="italic mb-6">
                &quot;My daughter was diagnosed with a serious illness. Our church
                family prayed fervently, and against all medical expectations,
                she made a full recovery. Praise God!&quot;
              </p>
              <p className="font-bold">— Mary W., Church Member</p>
            </div>
            <div className="bg-blue-900 p-6 rounded-lg">
              <p className="italic mb-6">
                &quot;I had been estranged from my brother for over 10 years. After
                months of prayer for reconciliation, we reconnected and now have
                a restored relationship.&quot;
              </p>
              <p className="font-bold">— Daniel K., Church Member</p>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Prayer;