import Link from 'next/link';

const contacts = [
  {
    contactHref: 'tel:+34111222333',
    contactName: 'tel:',
    contactValue: '+34 111 222 333',
  },
  {
    contactHref: 'mailto:test@mail.com',
    contactName: 'email:',
    contactValue: 'test@mail.com',
  },
];

export function ContactInfo() {
  return (
    <ul>
      {contacts.map((contact, idx) => {
        const { contactHref, contactName, contactValue } = contact;

        return (
          <li key={idx}>
            <a href={contactHref}>
              {contactName} {contactValue}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
