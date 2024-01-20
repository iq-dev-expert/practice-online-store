'use client';

import { useState } from 'react';
import { redirect } from 'next/navigation';

import { Button } from '@/app/ui/(components)/buttons/admin-in-out-button';

//Depending on whether the admin is logged in, we let him into the admin panel or redirect to loginPage
const adminIsLogedIn = false;

export default function AdminPanelPage() {
  const [loginAdmin, setLoginAdmin] = useState(adminIsLogedIn);

  if (!loginAdmin) {
    redirect('/anna-admin/sign-in');
  }

  return (
    <>
      <h1 className="text-5xl font-black">Admin Panel</h1>

      <Button buttonType="button" buttonText="Sign out" />
    </>
  );
}
