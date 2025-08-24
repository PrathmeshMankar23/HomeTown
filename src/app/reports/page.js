'use client'

import { useState } from 'react'
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  LineChart, Line, PieChart, Pie, Cell
} from 'recharts'

const salesData = [
  { month: 'Jan', sales: 4000, orders: 24 },
  { month: 'Feb', sales: 3000, orders: 18 },
  { month: 'Mar', sales: 5000, orders: 30 },
  { month: 'Apr', sales: 4500, orders: 27 },
  { month: 'May', sales: 6000, orders: 36 },
  { month: 'Jun', sales: 5500, orders: 33 },
]

const categoryData = [
  { name: 'Sofas', value: 35 },
  { name: 'Tables', value: 25 },
  { name: 'Beds', value: 15 },
  { name: 'Chairs', value: 20 },
  { name: 'Storage', value: 5 },
]

const COLORS = ['#3a7c8c', '#e2b894', '#c46d5e', '#2d3e40', '#9caea9'];

export default function Reports() {
  const [dateRange, setDateRange] = useState('last30days')

  return (
    <div className="ml-64 pt-16">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Reports & Analytics</h2>
          <select 
            className="border border-gray-300 rounded-md px-3 py-2"
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
          >
            <option value="last7days">Last 7 days</option>
            <option value="last30days">Last 30 days</option>
            <option value="last90days">Last 90 days</option>
            <option value="thisYear">This Year</option>
          </select>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Sales Overview</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="sales" fill="#3a7c8c" name="Sales ($)" />
                  <Bar dataKey="orders" fill="#e2b894" name="Orders" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Sales Trend</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="sales" stroke="#3a7c8c" name="Sales ($)" activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="orders" stroke="#e2b894" name="Orders" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Sales by Category</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Key Metrics</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <span className="text-gray-600">Total Revenue</span>
                <span className="text-xl font-semibold">$28,500</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <span className="text-gray-600">Total Orders</span>
                <span className="text-xl font-semibold">168</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <span className="text-gray-600">Average Order Value</span>
                <span className="text-xl font-semibold">$169.64</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <span className="text-gray-600">Conversion Rate</span>
                <span className="text-xl font-semibold">3.2%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
