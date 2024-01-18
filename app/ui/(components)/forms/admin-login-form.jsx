import { Button } from '@/app/ui/(components)/buttons/admin-in-out-button';

function createField(value) {
  return {
    labelHtmlFor: value,
    labelName: value,
    inputType: value,
    inputName: value,
    inputId: value,
  };
}

const email = createField('email');
const password = createField('password');

const fields = [email, password];

export function AdminLoginForm() {
  return (
    <form>
      <ul>
        {fields.map((field, idx) => {
          const { labelHtmlFor, labelName, inputType, inputName, inputId } =
            field;

          return (
            <li key={idx}>
              <label htmlFor={labelHtmlFor}>{labelName}</label>
              <input type={inputType} name={inputName} id={inputId} />
            </li>
          );
        })}
      </ul>

      <Button buttonType="submit" buttonText="Sign in" />
    </form>
  );
}
