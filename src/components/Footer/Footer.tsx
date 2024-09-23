import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

import React from "react";

const Footer = () => {
  return (
    <div className="Footer flex items-center justify-between p-6 w-full">
      <div className="flex gap-4">
        <Link
          href="https://www.linkedin.com/in/atpsito/"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin />
        </Link>
        <Link
          href="https://github.com/atpsito"
          target="_blank"
          rel="noreferrer"
        >
          <Github />
        </Link>
        <Link href="https://x.com/atpsito" target="_blank" rel="noreferrer">
          <Twitter />
        </Link>
        <Link
          href="https://www.instagram.com/atpsito/"
          target="_blank"
          rel="noreferrer"
        >
          <Instagram />
        </Link>
      </div>
      <Link href="mailto:alexxtp@gmail.com">
        <p className="text-lg font-semibold">alexxtp@gmail.com</p>
      </Link>
    </div>
  );
};

export default Footer;
