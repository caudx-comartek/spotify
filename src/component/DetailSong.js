import React from "react";

export default function DetailSong() {
  return (
    <div className="col-span-1 p-3">
      <h2 className="text-cyan-500 font-bold">Now playing</h2>
      <h2 className="text-neutral-400 text-2xl">Sing me to sleep</h2>
      <div className="w-[240px] m-auto mt-10">
        <img
          className="w-full"
          src="https://i.scdn.co/image/ab6761610000e5ebc02d416c309a68b04dc94576"
          alt="avatar"
        />
      </div>
      <div className="flex justify-evenly item-center mt-4">
        <img
          className="w-[70px] rounded-full"
          src="https://i.scdn.co/image/ab6761610000e5ebc02d416c309a68b04dc94576"
          alt="avatar"
        />
        <span className="text-xl ">Alan Walker</span>
      </div>
    </div>
  );
}
