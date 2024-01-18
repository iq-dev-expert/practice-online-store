import { Button } from '@/app/ui/(components)/buttons/admin-in-out-button';

const fields = [{ value: 'email' }, { value: 'password' }];

export function AdminLoginForm() {
  return (
    <form>
      <ul>
        {fields.map((field, idx) => {
          const { value } = field;

          return (
            <li key={idx}>
              <label htmlFor={value}>{value}</label>
              <input type={value} name={value} id={value} />
            </li>
          );
        })}
      </ul>

      <Button buttonType="submit" buttonText="Sign in" />
    </form>
  );
}
