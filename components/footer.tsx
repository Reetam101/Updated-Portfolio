import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2030 Reetam. All rights reserved.
      </small>
      <p className="text-xs ">
        <span className="font-semibold">About this website:</span> built with React & Next.js, Typescript, Tailwind CSS, Framer Motion, Resend & Vercel.
      </p>
    </footer>
  );
};

export default Footer;
