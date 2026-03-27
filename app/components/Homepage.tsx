'use client";'
import Frontpage from "./Frontpage";
import Mainpage from "./Mainpage";

export default function Homepage() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      
      {/* This is the "Phone" container */}
      <div className="relative w-full h-full max-w-[600px] aspect-[9/19]">
        <Frontpage />
        <div className="absolute w-full h-full z-10 top-165 lg:top-300">
          <Mainpage />
        </div>
      </div>
    </div>
  );
}
