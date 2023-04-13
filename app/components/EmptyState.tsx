"use client";

import { useRouter } from "next/navigation";
import React, { FC } from "react";
import Heading from "./Heading";
import Button from "./Button";

type Props = {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
};

const EmptyState: FC<Props> = ({
  title = "No exact matches!",
  subtitle = "Try changing or removing some of your filters",
  showReset,
}) => {
  const router = useRouter();

  return (
    <div className="h-[60vh] flex flex-col gap-2 justify-center items-center">
      <Heading center title={title} subtitle={subtitle} />
      <div className="w-48 mt-4">
        {showReset && (
          <Button
            outline
            label="Reset filters"
            onClick={() => router.push("/")}
          />
        )}
      </div>
    </div>
  );
};

export default EmptyState;
