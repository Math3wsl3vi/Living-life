"use client"
import  { useState } from 'react';
import { CheckIcon } from 'lucide-react';
const Membership = () => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const nextStep = () => {
    setStep(step + 1);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const prevStep = () => {
    setStep(step - 1);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Here you would normally handle the form submission
    setSubmitted(true);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[300px] bg-gradient-to-r from-blue-900 to-blue-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541119638723-c51cbe2262aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80')] bg-cover bg-center opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Become a Member
          </h1>
          <p className="text-xl text-white max-w-3xl">
            Join our church family and grow together in faith and community
          </p>
        </div>
      </section>
      {submitted ? <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-green-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <CheckIcon className="h-10 w-10 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-green-600 mb-6">
              Membership Application Submitted
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Thank you for applying for membership at Living Life Sanctuary! We&apos;re
              excited to welcome you into our church family.
            </p>
            <p className="text-gray-700 mb-8">
              A member of our pastoral team will contact you within the next 7
              days to schedule a welcome meeting and provide more information
              about our new members&apos; class.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-bold text-blue-800 mb-3">
                Next Steps
              </h3>
              <ul className="text-left space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                  <span>
                    Attend the next New Members&apos; Class on Sunday, June 18 at
                    2:00 PM
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                  <span>
                    Complete your membership covenant during the class
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                  <span>
                    Be officially welcomed during our Membership Sunday on July
                    2
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                  <span>Connect with a ministry team to start serving</span>
                </li>
              </ul>
            </div>
            <button onClick={() => window.location.href = '/'} className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md transition duration-300">
              Return to Homepage
            </button>
          </div>
        </section> : <>
          {/* Membership Steps */}
          <section className="py-10 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-center mb-10">
                <div className="w-full max-w-3xl">
                  <div className="flex items-center">
                    <div className={`flex items-center justify-center w-10 h-10 rounded-full ${step >= 1 ? 'bg-blue-800' : 'bg-gray-300'} text-white font-bold`}>
                      1
                    </div>
                    <div className={`flex-1 h-1 ${step >= 2 ? 'bg-blue-800' : 'bg-gray-300'}`}></div>
                    <div className={`flex items-center justify-center w-10 h-10 rounded-full ${step >= 2 ? 'bg-blue-800' : 'bg-gray-300'} text-white font-bold`}>
                      2
                    </div>
                    <div className={`flex-1 h-1 ${step >= 3 ? 'bg-blue-800' : 'bg-gray-300'}`}></div>
                    <div className={`flex items-center justify-center w-10 h-10 rounded-full ${step >= 3 ? 'bg-blue-800' : 'bg-gray-300'} text-white font-bold`}>
                      3
                    </div>
                  </div>
                  <div className="flex justify-between mt-2">
                    <div className="text-center w-20">
                      <span className={`text-sm font-medium ${step >= 1 ? 'text-blue-800' : 'text-gray-500'}`}>
                        Personal Info
                      </span>
                    </div>
                    <div className="text-center w-20">
                      <span className={`text-sm font-medium ${step >= 2 ? 'text-blue-800' : 'text-gray-500'}`}>
                        Faith Journey
                      </span>
                    </div>
                    <div className="text-center w-20">
                      <span className={`text-sm font-medium ${step >= 3 ? 'text-blue-800' : 'text-gray-500'}`}>
                        Involvement
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Membership Form */}
          <section className="py-10 bg-gray-100">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-blue-800 p-6 text-white">
                  <h2 className="text-2xl font-bold">Membership Application</h2>
                  <p className="mt-2">
                    {step === 1 && 'Step 1: Personal Information'}
                    {step === 2 && 'Step 2: Faith Journey'}
                    {step === 3 && 'Step 3: Church Involvement'}
                  </p>
                </div>
                <form className="p-6 md:p-10">
                  {/* Step 1: Personal Information */}
                  {step === 1 && <>
                      <div className="mb-8">
                        <h3 className="text-lg font-bold text-gray-700 mb-6">
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
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div>
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
                        <div className="mb-4">
                          <label htmlFor="address" className="block text-gray-700 mb-2">
                            Home Address
                          </label>
                          <input type="text" id="address" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                          <div>
                            <label htmlFor="city" className="block text-gray-700 mb-2">
                              City
                            </label>
                            <input type="text" id="city" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                          </div>
                          <div>
                            <label htmlFor="county" className="block text-gray-700 mb-2">
                              County
                            </label>
                            <input type="text" id="county" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                          </div>
                          <div>
                            <label htmlFor="postal" className="block text-gray-700 mb-2">
                              Postal Code
                            </label>
                            <input type="text" id="postal" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <label htmlFor="dob" className="block text-gray-700 mb-2">
                              Date of Birth
                            </label>
                            <input type="date" id="dob" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                          </div>
                          <div>
                            <label htmlFor="maritalStatus" className="block text-gray-700 mb-2">
                              Marital Status
                            </label>
                            <select id="maritalStatus" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                              <option value="">Select...</option>
                              <option value="single">Single</option>
                              <option value="married">Married</option>
                              <option value="widowed">Widowed</option>
                              <option value="divorced">Divorced</option>
                            </select>
                          </div>
                        </div>
                        <div>
                          <label htmlFor="occupation" className="block text-gray-700 mb-2">
                            Occupation
                          </label>
                          <input type="text" id="occupation" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <button type="button" onClick={nextStep} className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md transition duration-300">
                          Continue
                        </button>
                      </div>
                    </>}
                  {/* Step 2: Faith Journey */}
                  {step === 2 && <>
                      <div className="mb-8">
                        <h3 className="text-lg font-bold text-gray-700 mb-6">
                          Faith Journey
                        </h3>
                        <div className="mb-4">
                          <label htmlFor="salvation" className="block text-gray-700 mb-2">
                            When did you accept Christ as your Savior?
                          </label>
                          <select id="salvation" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                            <option value="">Select...</option>
                            <option value="recent">
                              Recently (within the past year)
                            </option>
                            <option value="1-5">1-5 years ago</option>
                            <option value="6-10">6-10 years ago</option>
                            <option value="10+">More than 10 years ago</option>
                            <option value="childhood">As a child</option>
                            <option value="considering">
                              Still considering
                            </option>
                          </select>
                        </div>
                        <div className="mb-4">
                          <label htmlFor="testimony" className="block text-gray-700 mb-2">
                            Please share briefly how you came to faith in Christ
                          </label>
                          <textarea id="testimony" rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
                        </div>
                        <div className="mb-4">
                          <label htmlFor="baptized" className="block text-gray-700 mb-2">
                            Have you been baptized?
                          </label>
                          <div className="flex space-x-4 mt-1">
                            <div className="flex items-center">
                              <input type="radio" id="baptizedYes" name="baptized" value="yes" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" />
                              <label htmlFor="baptizedYes" className="ml-2 block text-gray-700">
                                Yes
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input type="radio" id="baptizedNo" name="baptized" value="no" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" />
                              <label htmlFor="baptizedNo" className="ml-2 block text-gray-700">
                                No
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="mb-4">
                          <label htmlFor="previousChurch" className="block text-gray-700 mb-2">
                            Previous Church (if applicable)
                          </label>
                          <input type="text" id="previousChurch" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div className="mb-4">
                          <label htmlFor="attendingTime" className="block text-gray-700 mb-2">
                            How long have you been attending Grace Church?
                          </label>
                          <select id="attendingTime" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                            <option value="">Select...</option>
                            <option value="first">
                              This is my first visit
                            </option>
                            <option value="less-than-month">
                              Less than a month
                            </option>
                            <option value="1-6-months">1-6 months</option>
                            <option value="6-12-months">6-12 months</option>
                            <option value="1-3-years">1-3 years</option>
                            <option value="3+-years">More than 3 years</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="growthAreas" className="block text-gray-700 mb-2">
                            What areas would you like to grow in spiritually?
                          </label>
                          <textarea id="growthAreas" rows={3} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <button type="button" onClick={prevStep} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-8 rounded-md transition duration-300">
                          Back
                        </button>
                        <button type="button" onClick={nextStep} className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md transition duration-300">
                          Continue
                        </button>
                      </div>
                    </>}
                  {/* Step 3: Church Involvement */}
                  {step === 3 && <>
                      <div className="mb-8">
                        <h3 className="text-lg font-bold text-gray-700 mb-6">
                          Church Involvement
                        </h3>
                        <div className="mb-6">
                          <label className="block text-gray-700 mb-3">
                            Which ministries are you interested in serving with?
                            (Select all that apply)
                          </label>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div className="flex items-center">
                              <input type="checkbox" id="worship" className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                              <label htmlFor="worship" className="ml-2 block text-gray-700">
                                Worship Team
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input type="checkbox" id="children" className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                              <label htmlFor="children" className="ml-2 block text-gray-700">
                                Children&quot;s Ministry
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input type="checkbox" id="youth" className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                              <label htmlFor="youth" className="ml-2 block text-gray-700">
                                Youth Ministry
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input type="checkbox" id="hospitality" className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                              <label htmlFor="hospitality" className="ml-2 block text-gray-700">
                                Hospitality/Ushering
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input type="checkbox" id="prayer" className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                              <label htmlFor="prayer" className="ml-2 block text-gray-700">
                                Prayer Team
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input type="checkbox" id="outreach" className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                              <label htmlFor="outreach" className="ml-2 block text-gray-700">
                                Outreach/Missions
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input type="checkbox" id="media" className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                              <label htmlFor="media" className="ml-2 block text-gray-700">
                                Media/Tech Team
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input type="checkbox" id="smallGroup" className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                              <label htmlFor="smallGroup" className="ml-2 block text-gray-700">
                                Small Group Leader
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="mb-6">
                          <label className="block text-gray-700 mb-3">
                            Which small groups are you interested in joining?
                            (Select all that apply)
                          </label>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div className="flex items-center">
                              <input type="checkbox" id="bibleStudy" className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                              <label htmlFor="bibleStudy" className="ml-2 block text-gray-700">
                                Bible Study
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input type="checkbox" id="menGroup" className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                              <label htmlFor="menGroup" className="ml-2 block text-gray-700">
                                Men&quot;s Fellowship
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input type="checkbox" id="womenGroup" className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                              <label htmlFor="womenGroup" className="ml-2 block text-gray-700">
                                Women&quot;s Fellowship
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input type="checkbox" id="marriageGroup" className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                              <label htmlFor="marriageGroup" className="ml-2 block text-gray-700">
                                Marriage/Couples
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input type="checkbox" id="youthGroup" className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                              <label htmlFor="youthGroup" className="ml-2 block text-gray-700">
                                Young Adults
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input type="checkbox" id="prayerGroup" className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                              <label htmlFor="prayerGroup" className="ml-2 block text-gray-700">
                                Prayer Group
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="mb-6">
                          <label htmlFor="skills" className="block text-gray-700 mb-2">
                            What skills, talents, or spiritual gifts do you have
                            that you&quot;d like to use in the church?
                          </label>
                          <textarea id="skills" rows={3} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                        </div>
                        <div>
                          <label htmlFor="questions" className="block text-gray-700 mb-2">
                            Do you have any questions or additional information
                            you&quot;d like to share?
                          </label>
                          <textarea id="questions" rows={3} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                        </div>
                      </div>
                      <div className="mb-8">
                        <div className="flex items-center">
                          <input type="checkbox" id="agreement" className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" required />
                          <label htmlFor="agreement" className="ml-2 block text-gray-700">
                            I affirm my commitment to Christ and my desire to
                            grow as a member of Living Life Sanctuary. I agree to
                            attend the new members&quot; class and support the
                            church&quot;s vision and values.
                          </label>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <button type="button" onClick={prevStep} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-8 rounded-md transition duration-300">
                          Back
                        </button>
                        <button type="submit" onClick={handleSubmit} className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md transition duration-300">
                          Submit Application
                        </button>
                      </div>
                    </>}
                </form>
              </div>
            </div>
          </section>
        </>}
      {/* Membership Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">
              Benefits of Membership
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Becoming a member of Living Life Sanctuary connects you to a family
              of believers and provides opportunities for spiritual growth,
              service, and community.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg className="h-8 w-8 text-blue-800" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-800 mb-3">
                Spiritual Family
              </h3>
              <p className="text-gray-700">
                Connect with a community of believers who will support,
                encourage, and pray for you through life&quot;s journey. Experience
                authentic relationships and Christian fellowship.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg className="h-8 w-8 text-blue-800" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-800 mb-3">
                Spiritual Growth
              </h3>
              <p className="text-gray-700">
                Access discipleship resources, Bible studies, and small groups
                designed to help you grow in your relationship with Christ and
                deepen your understanding of God&quot;s Word.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg className="h-8 w-8 text-blue-800" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-800 mb-3">
                Service Opportunities
              </h3>
              <p className="text-gray-700">
                Discover and use your God-given gifts, talents, and abilities to
                serve in the church and make a difference in our community
                through various ministry opportunities.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg className="h-8 w-8 text-blue-800" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-800 mb-3">
                Pastoral Care
              </h3>
              <p className="text-gray-700">
                Receive spiritual guidance, counseling, and support from our
                pastoral team during life transitions, celebrations, and
                challenges. We&quot;re here to walk alongside you.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg className="h-8 w-8 text-blue-800" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-800 mb-3">
                Accountability
              </h3>
              <p className="text-gray-700">
                Be part of a community that lovingly holds one another
                accountable to living out the Christian faith with integrity and
                growing in Christlikeness.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg className="h-8 w-8 text-blue-800" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd" />
                  <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-800 mb-3">
                Church Vision
              </h3>
              <p className="text-gray-700">
                Participate in shaping the future of our church through member
                meetings, feedback opportunities, and having a voice in
                important church decisions.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Membership Process */}
      {!submitted && <section className="py-16 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-800 mb-4">
                Membership Process
              </h2>
              <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-5 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-200"></div>
                {/* Step 1 */}
                <div className="relative mb-12">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="flex-1 md:pr-8 md:text-right order-2 md:order-1 mt-4 md:mt-0">
                      <h3 className="text-xl font-bold text-blue-800 mb-2">
                        Complete Application
                      </h3>
                      <p className="text-gray-700">
                        Fill out the membership application form with your
                        personal information, faith journey, and areas of
                        interest.
                      </p>
                    </div>
                    <div className="bg-blue-800 text-white rounded-full h-10 w-10 flex items-center justify-center z-10 order-1 md:order-2">
                      <span className="font-bold">1</span>
                    </div>
                    <div className="flex-1 md:pl-8 order-3 mt-4 md:mt-0">
                      <div className="bg-white p-4 rounded-lg shadow-md md:hidden">
                        <h3 className="text-xl font-bold text-blue-800 mb-2">
                          Complete Application
                        </h3>
                        <p className="text-gray-700">
                          Fill out the membership application form with your
                          personal information, faith journey, and areas of
                          interest.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Step 2 */}
                <div className="relative mb-12">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="flex-1 md:pr-8 md:text-right order-2 md:order-1 mt-4 md:mt-0 md:hidden">
                      <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold text-blue-800 mb-2">
                          Attend New Members&quot; Class
                        </h3>
                        <p className="text-gray-700">
                          Participate in our one-day new members&quot; class to learn
                          about our church&quot;s history, beliefs, vision, and
                          expectations.
                        </p>
                      </div>
                    </div>
                    <div className="bg-blue-800 text-white rounded-full h-10 w-10 flex items-center justify-center z-10 order-1 md:order-2">
                      <span className="font-bold">2</span>
                    </div>
                    <div className="flex-1 md:pl-8 order-3 mt-4 md:mt-0">
                      <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold text-blue-800 mb-2">
                          Attend New Members&quot; Class
                        </h3>
                        <p className="text-gray-700">
                          Participate in our one-day new members&quot; class to learn
                          about our church&quot;s history, beliefs, vision, and
                          expectations.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Step 3 */}
                <div className="relative mb-12">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="flex-1 md:pr-8 md:text-right order-2 md:order-1 mt-4 md:mt-0">
                      <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold text-blue-800 mb-2">
                          Meet with Pastor
                        </h3>
                        <p className="text-gray-700">
                          Have a brief, informal conversation with one of our
                          pastors to share your faith journey and ask any
                          questions.
                        </p>
                      </div>
                    </div>
                    <div className="bg-blue-800 text-white rounded-full h-10 w-10 flex items-center justify-center z-10 order-1 md:order-2">
                      <span className="font-bold">3</span>
                    </div>
                    <div className="flex-1 md:pl-8 order-3 mt-4 md:mt-0 md:hidden">
                      <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold text-blue-800 mb-2">
                          Meet with Pastor
                        </h3>
                        <p className="text-gray-700">
                          Have a brief, informal conversation with one of our
                          pastors to share your faith journey and ask any
                          questions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Step 4 */}
                <div className="relative mb-12">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="flex-1 md:pr-8 md:text-right order-2 md:order-1 mt-4 md:mt-0 md:hidden">
                      <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold text-blue-800 mb-2">
                          Sign Membership Covenant
                        </h3>
                        <p className="text-gray-700">
                          Affirm your commitment to Christ and our church family
                          by signing the membership covenant.
                        </p>
                      </div>
                    </div>
                    <div className="bg-blue-800 text-white rounded-full h-10 w-10 flex items-center justify-center z-10 order-1 md:order-2">
                      <span className="font-bold">4</span>
                    </div>
                    <div className="flex-1 md:pl-8 order-3 mt-4 md:mt-0">
                      <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold text-blue-800 mb-2">
                          Sign Membership Covenant
                        </h3>
                        <p className="text-gray-700">
                          Affirm your commitment to Christ and our church family
                          by signing the membership covenant.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Step 5 */}
                <div className="relative">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="flex-1 md:pr-8 md:text-right order-2 md:order-1 mt-4 md:mt-0">
                      <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold text-blue-800 mb-2">
                          Welcome Sunday
                        </h3>
                        <p className="text-gray-700">
                          Be officially welcomed as a member during a Sunday
                          service, where the congregation will celebrate your
                          commitment.
                        </p>
                      </div>
                    </div>
                    <div className="bg-blue-800 text-white rounded-full h-10 w-10 flex items-center justify-center z-10 order-1 md:order-2">
                      <span className="font-bold">5</span>
                    </div>
                    <div className="flex-1 md:pl-8 order-3 mt-4 md:mt-0 md:hidden">
                      <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold text-blue-800 mb-2">
                          Welcome Sunday
                        </h3>
                        <p className="text-gray-700">
                          Be officially welcomed as a member during a Sunday
                          service, where the congregation will celebrate your
                          commitment.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>}
      {/* Testimonials */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Member Testimonials</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-900 p-6 rounded-lg">
              <p className="italic mb-6">
                &quot;Joining Grace Church was one of the best decisions I&quot;ve made.
                I&quot;ve grown spiritually and found a community that feels like
                family. The support and love here is incredible.&quot;
              </p>
              <p className="font-bold">— Sarah W., Member since 2018</p>
            </div>
            <div className="bg-blue-900 p-6 rounded-lg">
              <p className="italic mb-6">
                &apos;After moving to Nairobi, I was looking for a church home. From
                my first visit, I felt welcomed and valued. The teaching is
                biblically sound and the fellowship is genuine.&apos;
              </p>
              <p className="font-bold">— James O., Member since 2020</p>
            </div>
            <div className="bg-blue-900 p-6 rounded-lg">
              <p className="italic mb-6">
                &quot;Being a member has helped me discover and use my spiritual
                gifts. I&apos;ve found purpose in serving and have grown deeper in my
                relationship with God and others.&quot;
              </p>
              <p className="font-bold">— Ruth K., Member since 2019</p>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Membership;