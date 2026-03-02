import { useState } from "react";
import { PiShoppingCartSimple } from "react-icons/pi";

import Button from "@/components/ui/Button";
import IconButton from "@/components/ui/IconButton";
import Modal from "@/components/ui/Modal";

function CartOption() {
  const [show, setShow] = useState(false);
  return (
    <div className="relative">
      <IconButton
        onClick={() => setShow(!show)}
        icon={<PiShoppingCartSimple className="w-6 h-6" />}
      />
      <Modal show={show}>
        <div className="flex flex-col gap-2">
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
      </Modal>
    </div>
  );
}

export default CartOption;
