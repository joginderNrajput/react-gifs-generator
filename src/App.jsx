import React from 'react';
import Tag from './components/Tag';
import Random from './components/Random';

export default function App() {
  return (
    <div className="w-full h-full flex flex-col background  items-center">
      <h1 className="bg-white w-11/12 text-center mt-[10px] mx-4 text-2xl py-1 rounded-lg font-bold fixed">RANDOM GIFS</h1>
      <div className="flex flex-col w-full items-center mt-10">
        <Random></Random>
        <Tag></Tag>
      </div>
    </div>
  );
}
