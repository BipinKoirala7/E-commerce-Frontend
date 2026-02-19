import { LuUserRound } from "react-icons/lu";
import IconButton from "../../ui/IconButton";
import { AnimatePresence } from "motion/react";
import Button from "../../ui/Button";
import { useState } from "react";

function LoggedInUserOptions() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <IconButton
        onClick={() => setShow(!show)}
        icon={<LuUserRound className="w-6 h-6" />}
      />
      <AnimatePresence>
        {show && (
          <div className="fixed left-1/2 top-1/2 -translate-1/2 z-10 bg-background border border-foreground p-2 rounded-xl">
            <Button name="Account" />
            <Button name="Log Out" />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default LoggedInUserOptions;
