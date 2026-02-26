import { getIronSession } from 'iron-session';
import { cookies } from 'next/headers';
import { Session } from '@/types';

const SESSION_CONFIG = {
  password: process.env.SESSION_SECRET || 'college-erp-session-secret-key',
  cookieName: 'college-erp-session',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    sameSite: 'lax' as const,
    maxAge: 60 * 60 * 24 * 7, // 7 days
  },
};

export async function getSession() {
  const cookieStore = await cookies();
  const session = await getIronSession<Session>(cookieStore, SESSION_CONFIG);
  return session;
}

export async function setSession(user: Session['user']) {
  const cookieStore = await cookies();
  const session = await getIronSession<Session>(cookieStore, SESSION_CONFIG);
  session.user = user;
  session.iat = Math.floor(Date.now() / 1000);
  session.exp = Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7;
  await session.save();
  return session;
}

export async function clearSession() {
  const cookieStore = await cookies();
  const session = await getIronSession<Session>(cookieStore, SESSION_CONFIG);
  session.destroy();
}
