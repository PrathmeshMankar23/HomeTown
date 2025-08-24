'use client'

import { useState } from 'react'

export default function Settings() {
  const [activeTab, setActiveTab] = useState('general')
  const [storeInfo, setStoreInfo] = useState({
    name: 'Hometown Furniture',
    email: 'contact@hometownfurniture.com',
    phone: '(555) 123-4567',
    address: '123 Furniture Ave, Hometown, HT 12345',
    currency: 'USD',
    timezone: 'America/New_York'
  })

  const tabs = [
    { id: 'general', name: 'General' },
    { id: 'payment', name: 'Payment' },
    { id: 'shipping', name: 'Shipping' },
    { id: 'notifications', name: 'Notifications' },
    { id: 'users', name: 'Users' },
  ]

  return (
    <div className="ml-64 pt-16">
      <div className="p-6">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Settings</h2>
          
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={`py-4 px-6 text-sm font-medium ${
                      activeTab === tab.id
                        ? 'border-b-2 border-indigo-500 text-indigo-600'
                        : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.name}
                  </button>
                ))}
              </nav>
            </div>
            
            <div className="p-6">
              {activeTab === 'general' && (
                <div className="space-y-6">
                  <h3 className="text-lg font-medium text-gray-800">Store Information</h3>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="store-name" className="block text-sm font-medium text-gray-700">
                        Store Name
                      </label>
                      <input
                        type="text"
                        id="store-name"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        value={storeInfo.name}
                        onChange={(e) => setStoreInfo({...storeInfo, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <label htmlFor="store-email" className="block text-sm font-medium text-gray-700">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="store-email"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        value={storeInfo.email}
                        onChange={(e) => setStoreInfo({...storeInfo, email: e.target.value})}
                      />
                    </div>
                    <div>
                      <label htmlFor="store-phone" className="block text-sm font-medium text-gray-700">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        id="store-phone"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        value={storeInfo.phone}
                        onChange={(e) => setStoreInfo({...storeInfo, phone: e.target.value})}
                      />
                    </div>
                    <div>
                      <label htmlFor="store-currency" className="block text-sm font-medium text-gray-700">
                        Currency
                      </label>
                      <select
                        id="store-currency"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        value={storeInfo.currency}
                        onChange={(e) => setStoreInfo({...storeInfo, currency: e.target.value})}
                      >
                        <option value="USD">USD ($)</option>
                        <option value="EUR">EUR (€)</option>
                        <option value="GBP">GBP (£)</option>
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="store-address" className="block text-sm font-medium text-gray-700">
                        Address
                      </label>
                      <input
                        type="text"
                        id="store-address"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        value={storeInfo.address}
                        onChange={(e) => setStoreInfo({...storeInfo, address: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="pt-5">
                    <div className="flex justify-end">
                      <button className="btn-secondary mr-3">Cancel</button>
                      <button className="btn-primary">Save</button>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'payment' && (
                <div>
                  <h3 className="text-lg font-medium text-gray-800">Payment Settings</h3>
                  <p className="text-gray-600 mt-2">Configure your payment methods and preferences.</p>
                </div>
              )}
              
              {activeTab === 'shipping' && (
                <div>
                  <h3 className="text-lg font-medium text-gray-800">Shipping Settings</h3>
                  <p className="text-gray-600 mt-2">Configure your shipping methods and rates.</p>
                </div>
              )}
              
              {activeTab === 'notifications' && (
                <div>
                  <h3 className="text-lg font-medium text-gray-800">Notification Settings</h3>
                  <p className="text-gray-600 mt-2">Configure your notification preferences.</p>
                </div>
              )}
              
              {activeTab === 'users' && (
                <div>
                  <h3 className="text-lg font-medium text-gray-800">User Management</h3>
                  <p className="text-gray-600 mt-2">Manage users and permissions.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
