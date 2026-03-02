import { MdFilterList } from "react-icons/md";
import { TbSortAscending } from "react-icons/tb";
import IconWithNameButton from "../ui/IconWithNameButton";

export default function AdjustmentOptions() {
  return (
    <div className="flex gap-4 items-center">
      <IconWithNameButton
        icon={<TbSortAscending className="text-2xl aspect-square" />}
        name="Sort"
      />
      <IconWithNameButton
        icon={<MdFilterList className="text-2xl aspect-square" />}
        name="Filter"
      />
    </div>
  );
}
