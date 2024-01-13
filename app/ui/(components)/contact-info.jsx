import Link from "next/link";

export function ContactInfo() {
  return (
    <ul>
      <li>
        <a href="tel:+34111222333">tel: +34 111 222 333</a>
      </li>
      <li>
        <a href="mailto:test@mail.com">email: test@mail.com</a>
      </li>
    </ul>
  );
}
