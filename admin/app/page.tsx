import { Welcome } from '@/components/Welcome/Welcome';
import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle';
import { getUserTokenData } from '@/lib/utils/cookies';
import { getServerSideStoreData } from './api/utils';
import { redirect } from 'next/navigation';

export default async function HomePage() {
  const token = getUserTokenData();

  if (token) {
    redirect('/dashboard')
  } else {
    redirect('/login')
  }
}
