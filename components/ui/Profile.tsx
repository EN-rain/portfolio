import React from 'react';
import Image from 'next/image';
import { BackgroundBeams } from './BackgroundBeams';

const Profile = () => {
  return (
    <div>
    <div className="absolute inset-0 flex flex-col justify-center items-center">
      <Image
        src="/images/pfp.png"
        alt="Profile Picture"
        width={96}  
        height={96}  
        className="w-40 h-40 rounded-full mb-4"
      />
      <h2 className="text-xl font-bold">Edrian C. Nieves</h2>
      <p className="text-sm text-gray-400">
        20 years old, lives at Mars
      </p>
    </div>
    <BackgroundBeams/>
    </div>
  );
};

export default Profile;
