import { AnimatePresence } from "motion/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import Button from "@/components/ui/Button";
import IconButton from "@/components/ui/IconButton";
import { LuUserRound } from "react-icons/lu";

function AccountOption() {
  const [show, setShow] = useState(false);
  const router = useRouter();
  return (
    <div className="relative">
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

export default AccountOption;
