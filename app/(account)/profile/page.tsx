'use client';

import { useState } from 'react';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('Profile');

  const tabs = [
    { id: 'Profile', icon: 'person' },
    { id: 'Cart', icon: 'shopping_cart' },
    { id: 'Wishlist', icon: 'favorite_border' },
    { id: 'My Bookings', icon: 'history_edu' },
    { id: 'Payment', icon: 'credit_card' },
    { id: 'My Activities', icon: 'show_chart' },
    { id: 'Addresses', icon: 'home_pin' },
    { id: 'Settings', icon: 'tune' },
  ];

  const bookings = [
    {
      id: 'BKG-2901-XZ',
      title: 'Maha Ganapathi Homam',
      date: 'Oct 15, 2026',
      time: '08:30 AM',
      priest: 'Brahmasri K. Subrahmanya Somayaji',
      amount: '₹7,500',
      status: 'upcoming', // 'ongoing', 'upcoming', 'completed'
      isOnline: true,
      imageUrl: 'https://images.unsplash.com/photo-1574068468668-a05a11f871da?auto=format&fit=crop&q=80&w=400',
    },
    {
      id: 'BKG-1842-AB',
      title: 'Navagraha Shanti Pooja',
      date: 'Today',
      time: '10:00 AM (Ongoing)',
      priest: 'Auto-Assigned Verified Priest',
      amount: '₹12,000',
      status: 'ongoing',
      isOnline: true,
      imageUrl: 'https://images.unsplash.com/photo-1604604994733-411db1898739?auto=format&fit=crop&q=80&w=400',
    },
    {
      id: 'BKG-0912-LM',
      title: 'Gruha Pravesham',
      date: 'Aug 21, 2026',
      time: '06:00 AM',
      priest: 'Brahmasri Venkata Ramana Siddhanti',
      amount: '₹21,000',
      status: 'completed',
      isOnline: false,
      imageUrl: 'https://images.unsplash.com/photo-1582560469792-5642cb6be220?auto=format&fit=crop&q=80&w=400',
    }
  ];

  return (
    <main className="w-full pt-28 pb-20 bg-[#F8F5EE] min-h-screen font-sans">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Sidebar */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-[24px] shadow-sm overflow-hidden border border-[#F0E8D5] sticky top-[100px]">
              <div className="bg-gradient-to-br from-[#FFFDF7] to-[#F5E6E6] p-6 text-center border-b border-[#F0E8D5]">
                <h2 className="font-serif text-xl font-bold text-[#4A0404]">My Account</h2>
                <p className="text-[10px] text-[#78716C] font-bold uppercase tracking-widest mt-1">katkuri sanjay</p>
              </div>
              <div className="flex flex-col py-2">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-4 w-full px-6 py-3.5 text-sm font-semibold transition-colors ${
                      activeTab === tab.id 
                        ? 'bg-gradient-to-r from-[#92400E] to-[#7F1D1D] text-white rounded-r-full mx-2 shadow-md' 
                        : 'text-[#78716C] hover:bg-[#F8F5EE] hover:text-[#4A0404] mx-2 rounded-r-full'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[20px] opacity-80">{tab.icon}</span>
                    {tab.id}
                    {activeTab === tab.id && <span className="w-1.5 h-1.5 rounded-full bg-white ml-auto"></span>}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-9">
            {activeTab === 'Profile' && (
              <div className="flex flex-col gap-6">
                
                {/* Basic Information */}
                <div className="bg-white rounded-[24px] shadow-sm border border-[#F0E8D5] overflow-hidden">
                  <div className="bg-gradient-to-r from-[#FFFDF7] to-white px-8 py-5 border-b border-[#F0E8D5]">
                    <h3 className="font-serif font-bold text-[#4A0404] text-lg">Basic Information</h3>
                  </div>
                  <div className="p-8 flex flex-col gap-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2 gap-4">
                      <span className="text-[#78716C] text-sm w-48 font-medium">Profile Picture</span>
                      <div className="flex-1">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FEF3C7] to-[#FDE68A] text-[#92400E] flex items-center justify-center border-4 border-white shadow-sm">
                          <span className="material-symbols-outlined text-3xl">person</span>
                        </div>
                      </div>
                    </div>
                    <div className="w-full h-px bg-[#F0E8D5]"></div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2 group gap-2">
                      <span className="text-[#78716C] text-sm w-48 font-medium">Name</span>
                      <span className="flex-1 text-[#4A0404] text-sm font-bold uppercase">katkuri sanjay</span>
                      <button className="text-[#78716C] hover:text-[#B45309] transition-colors">
                        <span className="material-symbols-outlined text-[18px]">edit</span>
                      </button>
                    </div>
                    <div className="w-full h-px bg-[#F0E8D5]"></div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2 group gap-2">
                      <span className="text-[#78716C] text-sm w-48 font-medium">D.O.B.</span>
                      <span className="flex-1 text-[#4A0404] text-sm font-semibold">2002-09-02</span>
                      <button className="text-[#78716C] hover:text-[#B45309] transition-colors">
                        <span className="material-symbols-outlined text-[18px]">edit</span>
                      </button>
                    </div>
                    <div className="w-full h-px bg-[#F0E8D5]"></div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2 group gap-2">
                      <span className="text-[#78716C] text-sm w-48 font-medium">Gender</span>
                      <span className="flex-1 text-[#4A0404] text-sm font-semibold">Male</span>
                      <button className="text-[#78716C] hover:text-[#B45309] transition-colors">
                        <span className="material-symbols-outlined text-[18px]">edit</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="bg-white rounded-[24px] shadow-sm border border-[#F0E8D5] overflow-hidden mt-2">
                  <div className="bg-gradient-to-r from-[#FFFDF7] to-white px-8 py-5 border-b border-[#F0E8D5]">
                    <h3 className="font-serif font-bold text-[#4A0404] text-lg">Contact Information</h3>
                  </div>
                  <div className="p-8 flex flex-col gap-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2 group gap-2">
                      <span className="text-[#78716C] text-sm w-48 font-medium">Phone</span>
                      <span className="flex-1 text-[#4A0404] text-sm font-semibold">+91- 9000079139</span>
                      <button className="text-[#78716C] hover:text-[#B45309] transition-colors">
                        <span className="material-symbols-outlined text-[18px]">edit</span>
                      </button>
                    </div>
                    <div className="w-full h-px bg-[#F0E8D5]"></div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2 group gap-2">
                      <span className="text-[#78716C] text-sm w-48 font-medium">Email</span>
                      <span className="flex-1 text-[#4A0404] text-sm font-semibold">katkuri.sanjay@example.com</span>
                      <button className="text-[#78716C] hover:text-[#B45309] transition-colors">
                        <span className="material-symbols-outlined text-[18px]">edit</span>
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            )}
            
            {activeTab === 'My Bookings' && (
              <div className="flex flex-col gap-6">
                <div className="bg-white rounded-[24px] shadow-sm border border-[#F0E8D5] overflow-hidden">
                  <div className="bg-gradient-to-r from-[#FFFDF7] to-white px-8 py-6 border-b border-[#F0E8D5] flex items-center justify-between">
                    <div>
                      <h3 className="font-serif font-bold text-[#4A0404] text-2xl">My Bookings</h3>
                      <p className="text-sm text-[#78716C] mt-1">Manage your upcoming and past rituals</p>
                    </div>
                  </div>
                  
                  <div className="p-4 sm:p-6 md:p-8 flex flex-col gap-6">
                    {bookings.map((booking) => (
                      <div key={booking.id} className="relative flex flex-col sm:flex-row gap-6 p-6 rounded-2xl border border-[#F0E8D5] hover:shadow-md hover:border-[#B45309]/30 transition-all bg-white group">
                        
                        {/* Status Ribbon */}
                        <div className="absolute top-4 right-4 flex items-center gap-2">
                          {booking.status === 'ongoing' && (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider animate-pulse">
                              <span className="w-2 h-2 rounded-full bg-red-500"></span> Live Now
                            </span>
                          )}
                          {booking.status === 'upcoming' && (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FEF3C7] text-[#92400E] text-xs font-bold uppercase tracking-wider">
                              Upcoming
                            </span>
                          )}
                          {booking.status === 'completed' && (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-bold uppercase tracking-wider">
                              Completed
                            </span>
                          )}
                        </div>

                        {/* Image */}
                        <div className="w-full sm:w-40 h-40 rounded-xl overflow-hidden bg-[#F8F5EE] shrink-0 border border-[#F0E8D5]">
                          <img src={booking.imageUrl} alt={booking.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        
                        {/* Details */}
                        <div className="flex-1 flex flex-col justify-center min-w-0">
                          <p className="text-[10px] text-[#78716C] font-bold uppercase tracking-widest mb-1">Booking ID: {booking.id}</p>
                          <h4 className="font-serif text-xl font-bold text-[#4A0404] mb-2">{booking.title}</h4>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4 mb-4 text-sm">
                            <p className="flex items-center gap-2 text-[#78716C]">
                              <span className="material-symbols-outlined text-[16px] text-[#B45309]">calendar_today</span>
                              <span className="font-semibold text-[#4A0404]">{booking.date}</span>
                            </p>
                            <p className="flex items-center gap-2 text-[#78716C]">
                              <span className="material-symbols-outlined text-[16px] text-[#B45309]">schedule</span>
                              <span className="font-semibold text-[#4A0404]">{booking.time}</span>
                            </p>
                            <p className="flex items-center gap-2 text-[#78716C]">
                              <span className="material-symbols-outlined text-[16px] text-[#B45309]">person</span>
                              <span className="truncate">{booking.priest}</span>
                            </p>
                            <p className="flex items-center gap-2 text-[#78716C]">
                              <span className="material-symbols-outlined text-[16px] text-[#B45309]">payments</span>
                              <span className="font-semibold text-[#4A0404]">{booking.amount}</span>
                            </p>
                          </div>
                          
                          {/* Actions */}
                          <div className="flex flex-wrap gap-3 mt-auto pt-4 border-t border-[#F0E8D5]">
                            {booking.status === 'ongoing' && booking.isOnline && (
                              <button className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-red-700 to-[#92400E] text-white font-bold text-sm hover:from-red-800 hover:to-red-700 transition-colors shadow-sm">
                                <span className="material-symbols-outlined text-[18px]">videocam</span>
                                Join Online Ritual
                              </button>
                            )}
                            {booking.status === 'upcoming' && booking.isOnline && (
                              <button className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#FEF3C7] text-[#92400E] border border-[#FBBF24]/40 font-bold text-sm hover:bg-[#FDE68A] transition-colors">
                                <span className="material-symbols-outlined text-[18px]">link</span>
                                Get Meeting Link
                              </button>
                            )}
                            <button className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-white text-[#4A0404] border border-[#F0E8D5] font-bold text-sm hover:bg-[#F8F5EE] transition-colors">
                              View Invoice
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab !== 'Profile' && activeTab !== 'My Bookings' && (
              <div className="bg-white rounded-[24px] shadow-sm border border-[#F0E8D5] p-16 flex flex-col items-center justify-center text-center">
                <div className="w-24 h-24 rounded-full bg-[#F8F5EE] flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-4xl text-[#B45309] opacity-50">construction</span>
                </div>
                <h3 className="font-serif text-2xl text-[#4A0404] font-bold">{activeTab}</h3>
                <p className="text-[#78716C] mt-2 max-w-sm">This section is currently being updated for the new application experience.</p>
              </div>
            )}

          </div>
        </div>
      </div>
    </main>
  );
}
