import { ReactNode } from "react";

type ExternalLinkT = {
  link: string;
  target?: string;
  className?: string;
  children: ReactNode;
};

function ExternalLink({ link, target, className, children }: ExternalLinkT) {
  return (
    <a
      href={link}
      target={target ? target : "_blank"}
      className={`p-1 hover:text-blue-400 cursor-pointer` + className}
    >
      {children}
    </a>
  );
}

export default ExternalLink;
