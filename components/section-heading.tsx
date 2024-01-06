import React from "react";

type props = {
  children: React.ReactNode;
}
function SectionHeading({ children }: props) {
  return (
    <h2 className="text-3xl font-medium capitalize mb-8 text-center">{children}</h2>
  );
}

export default SectionHeading;
