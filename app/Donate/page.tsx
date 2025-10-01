"use client";
import { useState } from 'react';
import { CreditCardIcon, PhoneIcon, HeartIcon, CheckIcon } from 'lucide-react';
const Donate = () => {
  const [donationType, setDonationType] = useState('one-time');
  const [amount, setAmount] = useState('1000');
  const [paymentMethod, setPaymentMethod] = useState('mpesa');
  return <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[300px] bg-gradient-to-r from-blue-900 to-blue-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1604604994333-f1b0e9471186?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80')] bg-cover bg-center opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Give Online
          </h1>
          <p className="text-xl text-white max-w-3xl">
            Support the ministry and mission of Living Life Sanctuary
          </p>
        </div>
      </section>
      {/* Giving Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">
              Supporting {"God's"} Work
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Your generous giving helps us spread the Gospel, serve our
              community, and build {"God's"} kingdom. We offer multiple convenient
              ways to give tithes, offerings, and special donations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-blue-50 p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <HeartIcon className="h-10 w-10 text-blue-800" />
              </div>
              <h3 className="text-xl font-bold text-blue-800 mb-3">
                Tithes & Offerings
              </h3>
              <p className="text-gray-700">
                Support the ongoing ministry and operations of the church
                through your regular tithes and offerings.
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg shadow-md text-center">
              <div className="bg-green-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <svg className="h-10 w-10 text-green-700" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-green-700 mb-3">
                Building Fund
              </h3>
              <p className="text-gray-700">
                Contribute to our building projects, including the new youth
                center and sanctuary expansion.
              </p>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg shadow-md text-center">
              <div className="bg-yellow-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <svg className="h-10 w-10 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-yellow-600 mb-3">
                Missions & Outreach
              </h3>
              <p className="text-gray-700">
                Support our local and international mission efforts to spread
                the Gospel and serve those in need.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Donation Form */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-blue-800 p-6 text-white text-center">
              <h2 className="text-2xl font-bold">Make Your Donation</h2>
              <p className="mt-2">All transactions are secure and encrypted</p>
            </div>
            <form className="p-6 md:p-10">
              {/* Donation Type */}
              <div className="mb-8">
                <label className="block text-gray-700 font-bold mb-4">
                  Donation Type
                </label>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button type="button" onClick={() => setDonationType('one-time')} className={`flex-1 py-3 px-4 rounded-md border ${donationType === 'one-time' ? 'border-blue-800 bg-blue-50 text-blue-800' : 'border-gray-300 bg-white text-gray-700'} font-medium`}>
                    One-Time Gift
                  </button>
                  <button type="button" onClick={() => setDonationType('recurring')} className={`flex-1 py-3 px-4 rounded-md border ${donationType === 'recurring' ? 'border-blue-800 bg-blue-50 text-blue-800' : 'border-gray-300 bg-white text-gray-700'} font-medium`}>
                    Monthly Recurring
                  </button>
                </div>
              </div>
              {/* Amount */}
              <div className="mb-8">
                <label className="block text-gray-700 font-bold mb-4">
                  Select Amount (KSh)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  {['500', '1000', '2000', '5000'].map(amt => <button key={amt} type="button" onClick={() => setAmount(amt)} className={`py-3 px-4 rounded-md border ${amount === amt ? 'border-blue-800 bg-blue-50 text-blue-800' : 'border-gray-300 bg-white text-gray-700'} font-medium`}>
                      KSh {amt}
                    </button>)}
                </div>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-gray-500">
                    KSh
                  </span>
                  <input type="text" value={amount} onChange={e => setAmount(e.target.value)} className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter custom amount" />
                </div>
              </div>
              {/* Fund Designation */}
              <div className="mb-8">
                <label htmlFor="fund" className="block text-gray-700 font-bold mb-2">
                  Designate Your Gift
                </label>
                <select id="fund" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="tithe">Tithe</option>
                  <option value="offering">General Offering</option>
                  <option value="building">Building Fund</option>
                  <option value="missions">Missions & Outreach</option>
                  <option value="youth">Youth Ministry</option>
                  <option value="benevolence">Benevolence Fund</option>
                </select>
              </div>
              {/* Payment Method */}
              <div className="mb-8">
                <label className="block text-gray-700 font-bold mb-4">
                  Payment Method
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <button type="button" onClick={() => setPaymentMethod('mpesa')} className={`py-4 px-4 rounded-md border ${paymentMethod === 'mpesa' ? 'border-blue-800 bg-blue-50' : 'border-gray-300 bg-white'} flex flex-col items-center`}>
                    <PhoneIcon className={`h-6 w-6 ${paymentMethod === 'mpesa' ? 'text-blue-800' : 'text-gray-500'} mb-2`} />
                    <span className={paymentMethod === 'mpesa' ? 'text-blue-800 font-medium' : 'text-gray-700'}>
                      M-Pesa
                    </span>
                  </button>
                  <button type="button" onClick={() => setPaymentMethod('card')} className={`py-4 px-4 rounded-md border ${paymentMethod === 'card' ? 'border-blue-800 bg-blue-50' : 'border-gray-300 bg-white'} flex flex-col items-center`}>
                    <CreditCardIcon className={`h-6 w-6 ${paymentMethod === 'card' ? 'text-blue-800' : 'text-gray-500'} mb-2`} />
                    <span className={paymentMethod === 'card' ? 'text-blue-800 font-medium' : 'text-gray-700'}>
                      Credit/Debit Card
                    </span>
                  </button>
                  <button type="button" onClick={() => setPaymentMethod('paypal')} className={`py-4 px-4 rounded-md border ${paymentMethod === 'paypal' ? 'border-blue-800 bg-blue-50' : 'border-gray-300 bg-white'} flex flex-col items-center`}>
                    <svg className={`h-6 w-6 ${paymentMethod === 'paypal' ? 'text-blue-800' : 'text-gray-500'} mb-2`} viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19c-.084 0-.154.062-.167.145l-1.286 8.353c-.032.22.134.413.355.413h3.386c.305 0 .564-.22.612-.522l.027-.115.51-3.24.033-.18c.048-.302.308-.522.612-.522h.368c2.829 0 5.039-1.15 5.662-4.588.263-1.453.137-2.636-.569-3.596a2.202 2.202 0 0 0-.567-.562z" />
                    </svg>
                    <span className={paymentMethod === 'paypal' ? 'text-blue-800 font-medium' : 'text-gray-700'}>
                      PayPal
                    </span>
                  </button>
                </div>
              </div>
              {/* Personal Information */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-700 mb-4">
                  Personal Information
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
                  <input type="tel" id="phone" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                </div>
              </div>
              {/* Submit Button */}
              <button type="submit" className="w-full bg-blue-800 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded-md transition duration-300">
                Donate KSh {amount}
              </button>
              {/* Security Note */}
              <div className="mt-6 flex items-center justify-center text-gray-500 text-sm">
                <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <span>Secure donation powered by SSL encryption</span>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* Other Ways to Give */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">
              Other Ways to Give
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-800 mb-3">
                During Service
              </h3>
              <p className="text-gray-700 mb-4">
                Place your tithe or offering in the collection baskets during
                Sunday services or special events.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-800 mb-3">
                Bank Transfer
              </h3>
              <p className="text-gray-700 mb-4">
                Make a direct deposit to our church account:
              </p>
              <div className="bg-white p-4 rounded-md">
                <p className="text-gray-700">
                  <span className="font-medium">Bank Name:</span> Kenya National
                  Bank
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Account Name:</span> Grace
                  Church Kenya
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Account Number:</span>{' '}
                  01234567890
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Branch:</span> Nairobi Central
                </p>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-800 mb-3">
                M-Pesa Paybill
              </h3>
              <p className="text-gray-700 mb-4">
                Send your contribution via M-Pesa:
              </p>
              <div className="bg-white p-4 rounded-md">
                <p className="text-gray-700">
                  <span className="font-medium">Paybill Number:</span> 123456
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Account Number:</span> Your Name
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">
              Stewardship Testimonies
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-bold text-xl">
                  JK
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-gray-800">Jane Kamau</h3>
                  <p className="text-gray-600">Church Member</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                &quot;{"I've"} been tithing faithfully for 10 years, and God has blessed
                me beyond measure. {"It's"} not always easy, but {"I've"} seen {"God's"}
                provision in miraculous ways when I put Him first with my
                finances.&quot;
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-800 font-bold text-xl">
                  MO
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-gray-800">Mark Omondi</h3>
                  <p className="text-gray-600">Business Owner</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                &quot;As a business owner, {"I've"} made it a priority to give back to
                {"God's"} work. Through consistent giving, {"I've"} seen my business
                grow and have been able to create jobs for others in our
                community.&quot;
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-800 font-bold text-xl">
                  SW
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-gray-800">Sarah Wanjiku</h3>
                  <p className="text-gray-600">Youth Leader</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                &quot;I started giving as a student with the little I had. God has
                been faithful, and {"I've"} learned that giving {" isn't"} about the
                amount but about the heart behind it. Now I teach our youth the
                joy of generosity.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Financial Accountability */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">
              Financial Accountability
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
          </div>
          <div className="bg-blue-50 p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <CheckIcon className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">
                  Transparency
                </h3>
                <p className="text-gray-700">
                  We provide quarterly financial reports to our congregation and
                  maintain open books for review.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-white p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <svg className="h-10 w-10 text-blue-800" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">
                  Annual Audit
                </h3>
                <p className="text-gray-700">
                  Our finances are reviewed annually by an independent
                  accounting firm to ensure proper stewardship.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-white p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <svg className="h-10 w-10 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">
                  Finance Committee
                </h3>
                <p className="text-gray-700">
                  A dedicated team of qualified members oversees our church
                  finances and ensures responsible use of funds.
                </p>
              </div>
            </div>
            <div className="mt-10 text-center">
              <p className="text-gray-700 max-w-3xl mx-auto">
                We are committed to being good stewards of every shilling
                entrusted to us. If you have any questions about our financial
                practices or would like more information, please contact our
                finance office at finance@gracechurchkenya.org.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Donate;