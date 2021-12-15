/* eslint-disable @next/next/link-passhref */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import profilePic from "../public/images/me.png";

function ProfileSection(): JSX.Element {
  return (
    <div className="max-w-lg md:max-w-2xl">
      <h3 className="mt-16">About me</h3>
      <div className="flex">
        <div className="block w-48 h-48 pt-8">
          <Image
            src={profilePic}
            alt="Picture of Souvik Basu"
            width={150}
            height={150}
            className="rounded-full border-2 border-yellow"
          />
        </div>
        <p className="w-full ml-8">
          Hi, I am Souvik Basu. I work as a Senior Software Engineer with
          Microsoft (Vancouver) and contribute to many projects on the sides in
          my free time. I am a JavaScript enthusiast and passionate about
          Frontend technologies. I live in Vancouver in Canada and an active
          member of various dev groups here. On the side, I also run Frontend
          Social, a community-sourced platform for Frontend developers and
          designers to track the latest trends in Frontend.
        </p>
      </div>
    </div>
  );
}

export default ProfileSection;
