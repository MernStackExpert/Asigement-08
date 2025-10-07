import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const RatingChart = ({ ratingData }) => {
  // ৫ স্টার উপরে দেখানোর জন্য ডেটা অ্যারেটি উল্টে নিচ্ছি
  const reversedData = [...ratingData].reverse();

  return (
    // ResponsiveContainer চার্টকে কন্টেইনারের সাইজ অনুযায়ী রেসপন্সিভ করে
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={reversedData}
        layout="vertical" // এই prop চার্টটিকে হরাইজন্টাল করে দেয়
        margin={{
          top: 5,
          right: 20,
          left: 10,
          bottom: 5,
        }}
      >
        {/* chart.js এর grid color এর মতো হালকা একটি গ্রিড লাইন */}
        <CartesianGrid stroke="rgba(0, 0, 0, 0.05)" horizontal={false} />

        {/* X-অক্ষ (নিচের নাম্বার লাইন), যা ০ থেকে শুরু হবে */}
        <XAxis type="number" allowDecimals={false} />

        {/* Y-অক্ষ (বাম দিকের লেবেল), গ্রিড লাইন ছাড়া */}
        <YAxis
          dataKey="name"
          type="category"
          width={60}
          axisLine={false}
          tickLine={false}
        />

        {/* হোভার করলে ডেটা দেখানোর জন্য Tooltip */}
        <Tooltip
          cursor={{ fill: 'rgba(240, 240, 240, 0.5)' }}
          contentStyle={{ background: '#fff', border: '1px solid #ddd' }}
          labelStyle={{ fontWeight: 'bold' }}
        />
        
        {/* borderRadius এর মতো করে বারের কোণা গোল করার জন্য radius */}
        <Bar dataKey="count" fill="#f97316" radius={[0, 4, 4, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default RatingChart;