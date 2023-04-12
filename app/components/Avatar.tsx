"use client";

import Image from "next/image";
import { FC } from "react";

type Props = {
  src?: string | null | undefined;
};

const Avatar: FC<Props> = ({ src }) => {
  return (
    <Image
      className="rounded-full"
      src={src || "/images/placeholder.jpg"}
      width={30}
      height={30}
      alt="Avatar"
    />
  );
};

export default Avatar;
