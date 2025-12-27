import React from 'react'
import ReviewCard from './ReviewCard'
import { Divider } from '@mui/material'
import RatingsSummary from './RatingsSummary';

const Review = () => {
  return (
    <div className="px-4 lg:px-16 py-8">
      {/* 2-column layout on large screens */}
      <div className="grid gap-10 lg:grid-cols-[320px,1fr] items-start">
        {/* LEFT: product card */}
        <section>
          <img
            src="https://res.cloudinary.com/dxoqwusir/image/upload/v1727451187/SoftSilkZariBanarasiSaree_1_fwms3w.jpg"
            alt=""
            className="w-[320px] h-auto object-cover"
          />

          <div className="mt-4 space-y-1">
            <p className="font-bold text-xl">Ram Clothing</p>
            <p className="text-lg text-gray-600">Men&apos;s white shirt</p>

            <div className="mt-3 flex items-center gap-3 text-2xl">
              <span className="font-sans text-gray-800">₹ 400</span>
              <span className="line-through text-gray-400">₹ 900</span>
              <span className="text-primary-color font-semibold">60%</span>
            </div>
          </div>
        </section>

        {/* RIGHT: reviews column */}
        <section className="w-full">
          <h2 className='font-bold pb-4'>Review & Ratings</h2>
          <div className='border p-6 mb-8'>
            <RatingsSummary/>
          </div>
          {[1, 1, 1, 1, 1].map((item, idx) => (
            <div key={idx} className="space-y-3 w-full">
              <ReviewCard />
              <Divider />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};




export default Review
