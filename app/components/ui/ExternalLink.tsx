import { ReactNode } from "react";

type ExternalLinkT = {
  //    Link to external Path.(eg. https://youtube.com.)
  link: string;
  //    To either open in same tab or new one
  target?: string;
  //    Any additional styles if needed
  className?: string;
  children: ReactNode;
};

function ExternalLink({ link, target, className, children }: ExternalLinkT) {
  return (
    <a
      href={link}
      //    If provided different, otherwise open in new tab.
      target={target ? target : "_blank"}
      className={`p-1 hover:text-blue-400 cursor-pointer` + className}
    >
      {children}
    </a>
  );
}

export default ExternalLink;
