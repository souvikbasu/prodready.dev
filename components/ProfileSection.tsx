/* eslint-disable @next/next/link-passhref */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import profilePic from "../public/images/me.png";
import akashProfilePic from "../public/images/akash.jpg";
import Link from "next/link";

function ProfileSection(): JSX.Element {
  const cardStyles = "flex flex-col md:flex-row";
  const cardDescriptionStyles = "w-full md:ml-8";

  return (
    <div className="max-w-lg md:max-w-2xl">
      <h3 className="mt-16">About Us</h3>

      <div className={cardStyles}>
        <div className="block w-48 h-48 pt-8">
          <Image
            src={profilePic}
            alt="Picture of Souvik Basu"
            width={150}
            height={150}
            className="rounded-full border-2 border-yellow"
          />
        </div>
        <p className={cardDescriptionStyles}>
          Hi, I am Souvik Basu. I work as a Senior Software Engineer at
          Microsoft (Vancouver) and contribute to many open source projects on
          the sides in my free time. I am a JavaScript enthusiast and passionate
          about Frontend technologies. I live in Vancouver in Canada and am an
          active member of various dev groups here. On the side, I also run
          Frontend Social, a community-sourced platform for Frontend developers
          and designers to track the latest trends in Frontend.
        </p>
      </div>

      <div className={cardStyles}>
        <div className="block w-48 h-48 pt-8">
          <Image
            src={akashProfilePic}
            alt="Picture of Akash Joshi"
            width={150}
            height={150}
            className="rounded-full border-2 border-yellow"
          />
        </div>
        <p className={cardDescriptionStyles}>
          Hi, I am Akash Joshi. I work as a Platform Engineer at HASH.ai (NYC)
          and like to do community outreach in my free time. I am a Typescript
          and React enthusiast and passionate about solving complex problems
          using Web technologies. I work remotely from India, and am involved
          with organizations bringing web development to the students here. I
          make weekly posts on my blog at{" "}
          <Link href="https://thewriting.dev">thewriting.dev</Link>, where I try
          to share my learnings with the masses.
        </p>
      </div>
    </div>
  );
}

export default ProfileSection;
