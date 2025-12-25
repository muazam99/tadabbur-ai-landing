'use client';

import { useEffect } from 'react';
import { AptabaseProvider } from '@aptabase/react';

const aptabaseAppKey = process.env.NEXT_PUBLIC_APTABASE_APP_KEY || process.env.APTABASE_APP_KEY;

function AptabaseDebug() {
  useEffect(() => {
    // Debug logging
    console.log('=== APTABASE DEBUG ===');
    console.log('NODE_ENV:', process.env.NODE_ENV);
    console.log('NEXT_PUBLIC_APTABASE_APP_KEY:', aptabaseAppKey ? `${aptabaseAppKey.substring(0, 4)}...` : 'NOT SET');
    console.log('Raw env var exists:', !!aptabaseAppKey);
    console.log('Aptabase Provider initialized:', !!aptabaseAppKey);

    if (!aptabaseAppKey) {
      console.error('Aptabase: APP KEY is missing! Check your .env or .env.local file.');
      console.error('Make sure to use NEXT_PUBLIC_APTABASE_APP_KEY for client-side access.');
    } else {
      console.log('Aptabase: Successfully initialized with app key');
    }
  }, []);

  return null;
}

export default function AptabaseDebugProvider({ children }: { children: React.ReactNode }) {
  if (!aptabaseAppKey) {
    console.warn('AptabaseProvider: No app key found, rendering children without analytics');
    return <>{children}</>;
  }

  return (
    <>
      <AptabaseDebug />
      <AptabaseProvider appKey={aptabaseAppKey}>
        {children}
      </AptabaseProvider>
    </>
  );
}
