import { Button } from "@/app/ui/(components)/buttons/admin-in-out-button";

export function AdminLoginForm() {
  return (
    <form>
      <div>
        <label htmlFor="email">email</label>
        <input type="email" name="email" id="email" />
      </div>

      <div>
        <label htmlFor="password">password</label>
        <input type="password" name="password" id="password" />
      </div>

      <Button buttonType="submit" buttonText="Sign in" />
    </form>
  );
}
