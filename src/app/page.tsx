// https://www.figma.com/design/tDO9VaIliFxysvSfW0bgJO/Portfolio-UI---Web-%26-Mobile-(Community)?node-id=0-1&p=f&t=5KtxU7De2coqQrmm-0

import Image from 'next/image';
import { Post } from "@/components/cards/post";
import { Works } from "@/components/cards/work";

export default function Home() {
  return (
    <>
      {/* Container 1 */}
      <div className="w-full px-4 sm:px-20 md:px-32 xl:px-64 py-14 md:py-20 flex flex-col-reverse lg:flex-row justify-between">
        {/* Container for title, description and call-to-action etc */}
        <div className="py-8 sm:py-10 flex flex-col ">
          {/* Title */}
          <h1 className="w-full lg:w-3/4 font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight flex flex-col justify-center text-center lg:text-left">
            <span>Hi, I&apos;m Suraj,</span>
            <span>a.k.a. Tiger 👋</span>
            <span>🚀 Full Stack Web Developer!</span>
          </h1>
          {/* Description */}
          <p className="w-full lg:w-3/4 my-5 sm:my-8 text-md lg:text-lg font-medium whitespace-normal text-center lg:text-left">
            Passionate about building with TypeScript, React, Node.js
            💻 Exploring the wonders of computers & software development!
            🌟 Sharing insights at #tigerxinsights
            – Let&apos;s learn & grow together!
          </p>
          {/* Call-to-action */}
          <div className="self-center lg:self-start">
            <a href="/contact" className="bg-[#FF6464] hover:bg-[#fb5858] px-4 py-3 text-white rounded">Let&apos;s Connect</a>
          </div>
        </div>
        {/* Profile image placeholder */}
        <div className="w-auto lg:w-1/2 flex flex-col justify-center">
          <div className="bg-[#EDF7FA] m-auto w-48 sm:w-60 rounded-full">
            <Image
              src="/profile_logo.png"
              alt="profile_pic"
              width={400}
              height={400}
              priority={true}
              className="translate-x-1 -translate-y-3" />
          </div>
        </div>
      </div>
      {/* Container 2 */}
      <div className="w-full bg-[#EDF7FA] px-4 sm:px-20 md:px-32 xl:px-64 py-10">
        {/* Container for title and button */}
        <div className="flex justify-center lg:justify-between">
          {/* Title */}
          <h2 className="font-semibold text-xl">Recent posts</h2>
          {/* Button */}
          <a href="/blog" className="text-blue-500 underline hidden lg:block">view all</a>
        </div>
        {/* Container for cards */}
        <div className="py-5 flex justify-around flex-wrap gap-8">
          <Post />
          <Post />
          <Post />
        </div>
        {/* Container for button */}
        <div className="flex justify-center">
          {/* Button */}
          <a href="/blog" className="text-white lg:text-blue-500 no-underline lg:underline bg-[#FF6464] px-3 py-1 rounded-3xl block lg:hidden">view all</a>
        </div>
      </div>
      {/* Container 3 */}
      <div className="w-full px-4 sm:px-20 md:px-32 xl:px-64 py-10">
        {/* Container for title */}
        <div className="flex justify-center lg:justify-between">
          <h2 className="font-semibold text-xl">Featured works</h2>
        </div>
        {/* Container for cards */}
        <div>
          <Works />
          <Works />
          <Works />
        </div>
      </div>
    </>
  );
};