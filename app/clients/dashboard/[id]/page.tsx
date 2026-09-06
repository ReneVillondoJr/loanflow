import { cookies } from 'next/headers';

export default async function ClientPage() {
  const cookieStore = await cookies();
  const name = decodeURIComponent(
    cookieStore.get('loanflow-name')?.value ?? 'Demo Client',
  );
  const email = decodeURIComponent(
    cookieStore.get('loanflow-email')?.value ?? '',
  );

  return (
    <div>
      <h1>Welcome, {name}</h1>

      <p>Email: {email}</p>

      <p>Customer portal demo</p>
    </div>
  );
}
