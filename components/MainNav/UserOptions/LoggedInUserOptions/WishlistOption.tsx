import Modal from "@/components/ui/Modal";
import { useState } from "react";
import { SlHeart } from "react-icons/sl";

import Button from "@/components/ui/Button";
import IconButton from "@/components/ui/IconButton";

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
      <Modal show={show}>
        <Button
          name="Wishlist"
          className="w-full hover:bg-primary"
          onClick={() => {
            setShow(false);
          }}
        />
      </Modal>
    </div>
  );
}

export default WishlistOption;
