"use client";
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { FaArrowUp, FaArrowDown, FaRegMoneyBillAlt } from 'react-icons/fa';

// Static data for the financial breakdown
const financialData = [
  { category: 'Most Money Spent', amount: 1200 },
  { category: 'Wasted Money', amount: 500 },
  { category: 'Investments', amount: 700 },
  { category: 'Savings', amount: 800 },
  { category: 'Miscellaneous', amount: 300 },
];

// Recommendation data (suggestion for improving savings)
const recommendationData = [
  { category: 'Wasted Money', optimal: 200 },
  { category: 'Investments', optimal: 1000 },
  { category: 'Savings', optimal: 1200 },
];

const page = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-semibold text-gray-700 mb-8">Track Your Expenses</h1>

      {/* Financial Breakdown Chart */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8 hover:shadow-xl transition-transform transform hover:scale-105">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Financial Breakdown</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={financialData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="amount" fill="#4CAF50" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Expense Summary with Insights */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8 hover:shadow-xl transition-transform transform hover:scale-105">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Expense Summary & Insights</h2>
        <ul className="space-y-4 text-gray-600">
          {financialData.map((data, index) => (
            <li key={index} className="flex justify-between items-center">
              <span className="font-semibold">{data.category}</span>
              <span className="text-gray-800 font-bold">${data.amount}</span>
              {/* Displaying recommendations based on spending */}
              {data.category === 'Wasted Money' && (
                <span className="text-red-600">
                  <FaArrowDown className="inline-block mr-1" /> Reduce wasted money
                </span>
              )}
              {data.category === 'Investments' && (
                <span className="text-green-600">
                  <FaArrowUp className="inline-block mr-1" /> Increase investments
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Recommendation Graph */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8 hover:shadow-xl transition-transform transform hover:scale-105">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Expense Recommendations</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={recommendationData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="optimal" fill="#FF9800" />
          </BarChart>
        </ResponsiveContainer>
        <div className="mt-4">
          <p className="text-gray-700">
            <FaRegMoneyBillAlt className="inline-block mr-2 text-green-500" />
            <strong>Recommendation:</strong> You could optimize your spending by reducing waste and increasing investments. Focus on moving some of the Wasted Money into Investments or Savings for a better future ROI.
          </p>
        </div>
      </div>

      {/* Savings Progress */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8 hover:shadow-xl transition-transform transform hover:scale-105">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Savings Progress</h2>
        <div className="relative pt-1">
          <div className="flex justify-between">
            <span className="text-gray-600">Savings Goal: $1200</span>
            <span className="text-gray-600">Current: $800</span>
          </div>
          <div className="flex mt-2">
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-green-400 h-2.5 rounded-full" style={{ width: '66.6%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
