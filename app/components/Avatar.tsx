"use client";

import Image from "next/image";

type Props = {};

const Avatar = (props: Props) => {
  return (
    <Image
      className="rounded-full"
      src="/images/placeholder.jpg"
      width={30}
      height={30}
      alt="Avatar"
    />
  );
};

export default Avatar;
