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
          <div className="absolute right-full top-full mt-2 z-10 min-w-40 bg-primary border border-foreground p-2 rounded-xl">
            <Button
              name="Account"
              className="w-full"
              onClick={() => router.push("/account")}
            />
            <Button
              name="Log Out"
              className="w-full"
              onClick={() => router.push("/logout")}
            />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default LoggedInUserOptions;
