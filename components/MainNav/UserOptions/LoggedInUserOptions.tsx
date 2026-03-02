import { LuUserRound } from "react-icons/lu";
import IconButton from "../../ui/IconButton";
import { AnimatePresence } from "motion/react";
import Button from "../../ui/Button";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

function LoggedInUserOptions() {
  const [show, setShow] = useState(false);
  const parent = useRef<HTMLDivElement>(null);
  const router = useRouter();
  return (
    <div ref={parent} className="relative">
      <IconButton
        onClick={() => setShow(!show)}
        icon={<LuUserRound className="w-6 h-6" />}
      />
      <AnimatePresence>
        {show && (
          <div className="absolute right-full top-full mt-2 z-10 min-w-40 bg-foreground border border-foreground p-2 rounded-xl">
            <Button
              name="Account"
              className="w-full hover:bg-primary"
              onClick={() => {
                router.push("/account");
                setShow(false);
              }}
            />
            <Button
              name="Log Out"
              className="w-full hover:bg-primary"
              onClick={() => {
                router.push("/logout");
                setShow(false);
              }}
            />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default LoggedInUserOptions;
