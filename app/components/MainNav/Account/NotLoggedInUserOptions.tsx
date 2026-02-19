import Button from "../../ui/Button";

function NotLoggedInUserOptions() {
  return (
    <div className="flex gap-2">
      <Button name="Login" />
      <Button name="Sign Up" />
    </div>
  );
}

export default NotLoggedInUserOptions;
