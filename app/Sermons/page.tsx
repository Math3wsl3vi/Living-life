"use client";
import { useState } from 'react';
import { SearchIcon, FilterIcon, PlayIcon, DownloadIcon, CalendarIcon, ClockIcon } from 'lucide-react';
// import  { YouTubePlayer } from 'react-youtube';
// import { getYouTubeVideoId } from '@/utils/youtube';
import Image from 'next/image';

// Define the Sermon interface
interface Sermon {
  id: number;
  title: string;
  pastor: string;
  date: string;
  duration: string;
  category: string;
  thumbnail: string;
  videoUrl: string;
  description: string;
}

const Sermons = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedSermon, setSelectedSermon] = useState<Sermon | null>(null);

  // Mock sermon data
  const sermons: Sermon[] = [
    {
      id: 1,
      title: 'Finding Peace in the Storm',
      pastor: 'Pastor David Kimani',
      date: 'May 21, 2023',
      duration: '45:32',
      category: 'faith',
      thumbnail: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      videoUrl: 'https://www.youtube.com/watch?v=jfKfPfyJRdk',
      description: "In this powerful message, Pastor David explores how we can find God's peace even in the midst of life's most challenging storms."
    },
    {
      id: 2,
      title: 'The Power of Prayer',
      pastor: 'Pastor Sarah Odhiambo',
      date: 'May 14, 2023',
      duration: '38:15',
      category: 'prayer',
      thumbnail: 'https://images.unsplash.com/photo-1476820865390-c52aeebb9891?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      videoUrl: 'https://www.youtube.com/watch?v=jfKfPfyJRdk',
      description: 'Pastor Sarah shares biblical insights on how to develop a powerful prayer life that transforms your relationship with God.'
    },
    {
      id: 3,
      title: 'Walking in Faith',
      pastor: 'Pastor Michael Wanjiru',
      date: 'May 7, 2023',
      duration: '42:18',
      category: 'faith',
      thumbnail: 'https://images.unsplash.com/photo-1532190651645-d9e760a53e74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      videoUrl: 'https://www.youtube.com/watch?v=jfKfPfyJRdk',
      description: 'Learn how to walk by faith and not by sight in this encouraging message from Pastor Michael.'
    },
    {
      id: 4,
      title: 'The Grace of Giving',
      pastor: 'Pastor David Kimani',
      date: 'April 30, 2023',
      duration: '39:45',
      category: 'stewardship',
      thumbnail: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      videoUrl: 'https://www.youtube.com/watch?v=jfKfPfyJRdk',
      description: 'Pastor David explores the biblical principles of generosity and how giving transforms both the giver and the receiver.'
    },
    {
      id: 5,
      title: 'Building Strong Families',
      pastor: 'Pastor Sarah Odhiambo',
      date: 'April 23, 2023',
      duration: '44:10',
      category: 'family',
      thumbnail: 'https://images.unsplash.com/photo-1536599424071-0b215a388ba7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      videoUrl: 'https://www.youtube.com/watch?v=jfKfPfyJRdk',
      description: "Discover God's blueprint for building strong, Christ-centered families in today's challenging world."
    },
    {
      id: 6,
      title: 'Overcoming Temptation',
      pastor: 'Pastor Michael Wanjiru',
      date: 'April 16, 2023',
      duration: '41:23',
      category: 'spiritual growth',
      thumbnail: 'https://images.unsplash.com/photo-1525943837837-af668e09139d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      videoUrl: 'https://www.youtube.com/watch?v=jfKfPfyJRdk',
      description: 'Pastor Michael shares practical biblical strategies for overcoming temptation and living in victory.'
    }
  ];

  // Filter sermons based on active tab
  const filteredSermons = activeTab === 'all' ? sermons : sermons.filter(sermon => sermon.category === activeTab);

  const handleSermonClick = (sermon: Sermon) => {
    setSelectedSermon(sermon);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // YouTube player options
//   const opts = {
//     width: '100%',
//     height: '100%',
//     playerVars: {
//       // https://developers.google.com/youtube/player_parameters
//       autoplay: 0,
//       controls: 1,
//       rel: 0,
//       showinfo: 0,
//     },
//   };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[300px] bg-gradient-to-r from-blue-900 to-blue-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507692049790-de58290a4334?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')] bg-cover bg-center opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Sermons & Media
          </h1>
          <p className="text-xl text-white max-w-3xl">
            Explore our library of sermons to grow in your faith journey
          </p>
        </div>
      </section>

      {/* Featured Sermon / Selected Sermon */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Video Player */}
            <div className="lg:col-span-2">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                {/* <div className="w-full h-0 pb-[56.25%] relative">
                  <YouTubePlayer
                    videoId={getYouTubeVideoId(selectedSermon ? selectedSermon.videoUrl : sermons[0].videoUrl)}
                    opts={opts}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                    }}
                  />
                </div> */}
              </div>
            </div>
            {/* Sermon Details */}
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-blue-800 mb-2">
                {selectedSermon ? selectedSermon.title : sermons[0].title}
              </h2>
              <p className="text-yellow-600 font-medium mb-4">
                {selectedSermon ? selectedSermon.pastor : sermons[0].pastor}
              </p>
              <div className="flex items-center mb-2">
                <CalendarIcon className="h-5 w-5 text-blue-800 mr-2" />
                <span className="text-gray-700">
                  {selectedSermon ? selectedSermon.date : sermons[0].date}
                </span>
              </div>
              <div className="flex items-center mb-4">
                <ClockIcon className="h-5 w-5 text-blue-800 mr-2" />
                <span className="text-gray-700">
                  {selectedSermon ? selectedSermon.duration : sermons[0].duration}
                </span>
              </div>
              <p className="text-gray-700 mb-6">
                {selectedSermon ? selectedSermon.description : sermons[0].description}
              </p>
              <div className="flex space-x-3">
                <button className="bg-blue-800 hover:bg-blue-700 text-white py-2 px-4 rounded-md flex items-center">
                  <DownloadIcon className="h-5 w-5 mr-2" />
                  Download Audio
                </button>
                <button className="bg-green-600 hover:bg-green-500 text-white py-2 px-4 rounded-md flex items-center">
                  <DownloadIcon className="h-5 w-5 mr-2" />
                  Notes
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sermon Library */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">
              Sermon Library
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
          </div>
          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="relative w-full md:w-1/2 mb-4 md:mb-0">
              <input type="text" placeholder="Search sermons..." className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <SearchIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <div className="flex items-center">
              <FilterIcon className="h-5 w-5 text-gray-700 mr-2" />
              <span className="mr-2 text-gray-700">Filter by:</span>
              <div className="flex space-x-2">
                <button onClick={() => setActiveTab('all')} className={`px-3 py-1 rounded-md ${activeTab === 'all' ? 'bg-blue-800 text-white' : 'bg-white text-gray-700 hover:bg-gray-200'}`}>
                  All
                </button>
                <button onClick={() => setActiveTab('faith')} className={`px-3 py-1 rounded-md ${activeTab === 'faith' ? 'bg-blue-800 text-white' : 'bg-white text-gray-700 hover:bg-gray-200'}`}>
                  Faith
                </button>
                <button onClick={() => setActiveTab('prayer')} className={`px-3 py-1 rounded-md ${activeTab === 'prayer' ? 'bg-blue-800 text-white' : 'bg-white text-gray-700 hover:bg-gray-200'}`}>
                  Prayer
                </button>
                <button onClick={() => setActiveTab('family')} className={`px-3 py-1 rounded-md ${activeTab === 'family' ? 'bg-blue-800 text-white' : 'bg-white text-gray-700 hover:bg-gray-200'}`}>
                  Family
                </button>
              </div>
            </div>
          </div>
          {/* Sermon Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSermons.map(sermon => (
              <div
                key={sermon.id}
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition duration-300"
                onClick={() => handleSermonClick(sermon)}
              >
                <div className="relative h-48">
                  <Image width={300} height={200} src={sermon.thumbnail} alt={sermon.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                    <div className="bg-blue-800 rounded-full p-3">
                      <PlayIcon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-800 mb-2">
                    {sermon.title}
                  </h3>
                  <p className="text-yellow-600 font-medium mb-2">
                    {sermon.pastor}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center">
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      <span>{sermon.date}</span>
                    </div>
                    <div className="flex items-center">
                      <ClockIcon className="h-4 w-4 mr-1" />
                      <span>{sermon.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <nav className="flex items-center space-x-2">
              <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                Previous
              </button>
              <button className="px-4 py-2 bg-blue-800 text-white rounded-md">
                1
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                2
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                3
              </button>
              <span className="px-2">...</span>
              <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                Next
              </button>
            </nav>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-16 bg-blue-800 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Subscribe to Our Podcast</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Never miss a sermon. Subscribe to our podcast and receive the latest
            messages directly on your device.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#" className="bg-black hover:bg-gray-900 text-white font-bold py-3 px-8 rounded-md flex items-center justify-center">
              <svg className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
              </svg>
              Apple Podcasts
            </a>
            <a href="#" className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-md flex items-center justify-center">
              <svg className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
              Spotify
            </a>
            <a href="#" className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-md flex items-center justify-center">
              <svg className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
              </svg>
              YouTube
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sermons;