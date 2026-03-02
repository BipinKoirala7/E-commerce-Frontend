import Button from "@/components/ui/Button";
import IconButton from "@/components/ui/IconButton";
import { AnimatePresence } from "motion/react";
import { useState } from "react";
import { SlHeart } from "react-icons/sl";

function WishlistOption() {
  const [show, setShow] = useState(false);
  return (
    <div className="relative">
      <IconButton
        onClick={() => {
          setShow(!show);
        }}
        icon={<SlHeart className="w-6 h-6" />}
      />
      <AnimatePresence>
        {show && (
          <div className="absolute right-full top-full mt-2 z-10 min-w-40 bg-foreground border border-foreground p-2 rounded-sm">
            <Button
              name="Account"
              className="w-full hover:bg-primary"
              onClick={() => {
                setShow(false);
              }}
            />
            <Button
              name="Log Out"
              className="w-full hover:bg-primary"
              onClick={() => {
                setShow(false);
              }}
            />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default WishlistOption;
