import React from 'react'
import Card from './MarketCard'
import art1 from '../../Assets/art.jpg'
import art2 from '../../Assets/art2.jpg'
import Navbar from '../Navbar/Navbar'
import SkeletonCard from './SkeletonCard'

const Market = () => {
  return (
    <>
      <Navbar />
      <div>
        <div className="text-gray-100 font-bold text-2xl tracking-wider sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl sm:leading-none pl-10 pt-10">
          <h1 className="inline-block relative">
            <span className="relative z-10">Market</span>
            <span className="absolute top-0 left-0 z-0 text-blue-400 opacity-50 blur-xl">
              Market
            </span>
          </h1>
        </div>
        <div className="cards flex gap-9 w-screen h-full flex-wrap p-10">
          <Card
            image={art1}
            name={'Demon Slayer Vector Art'}
            description={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, recusandae?'
            }
            price={0.4}
          />
          <Card
            image={art2}
            name={'Naruto Wall Paper'}
            description={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, recusandae?'
            }
            price={0.8}
          />
        <SkeletonCard/>
        <SkeletonCard/>
        <SkeletonCard/>
        <SkeletonCard/>
        <SkeletonCard/>
        <SkeletonCard/>
        <SkeletonCard/>
        <SkeletonCard/>
        <SkeletonCard/>
        <SkeletonCard/>
        </div>
      </div>
    </>
  )
}

export default Market
