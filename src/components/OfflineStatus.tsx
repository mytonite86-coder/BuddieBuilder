import { useEffect, useState } from 'react';

export default function OfflineStatus() {
  const [status, setStatus] = useState('Preparing offline play. Keep this page open while connected.');

  useEffect(() => {
    let disposed = false;
    const update = (message: string) => { if (!disposed) setStatus(message); };
    if (!import.meta.env.PROD) {
      update('Offline preparation is available in the built app.');
      return;
    }
    if (!('serviceWorker' in navigator) || !window.isSecureContext) {
      update('Offline preparation is unavailable in this browser or connection. Online play still works.');
      return;
    }
    let timer: number | undefined;
    let port: MessagePort | undefined;
    const check = async () => {
      try {
        await navigator.serviceWorker.register(`${import.meta.env.BASE_URL}sw.js`, {
          scope: import.meta.env.BASE_URL, updateViaCache: 'none',
        });
        const ready = await Promise.race([
          navigator.serviceWorker.ready,
          new Promise<never>((_, reject) => {
            timer = window.setTimeout(() => reject(new Error('Offline preparation timed out')), 15000);
          }),
        ]);
        window.clearTimeout(timer);
        if (disposed || !ready.active) return;
        const channel = new MessageChannel();
        port = channel.port1;
        timer = window.setTimeout(() => {
          update('Offline readiness could not be confirmed. Reopen while connected to try again.');
          port?.close();
        }, 10000);
        channel.port1.onmessage = (event: MessageEvent<{ ready: boolean }>) => {
          window.clearTimeout(timer);
          update(event.data.ready
            ? 'Ready for offline play on this browser. A new buddy starts each time; saving is coming later.'
            : 'Offline files are incomplete. Reopen while connected to prepare again.');
          channel.port1.close();
        };
        ready.active.postMessage({ type: 'CHECK_OFFLINE' }, [channel.port2]);
      } catch {
        window.clearTimeout(timer);
        update('Offline preparation did not finish. Play still works while connected; reopen online to try again.');
      }
    };
    void check();
    return () => {
      disposed = true;
      window.clearTimeout(timer);
      port?.close();
    };
  }, []);

  return <details className="mx-4 mb-4 rounded-xl border border-white/20 p-3 text-sm text-white/80">
    <summary className="cursor-pointer font-bold">For grown-ups: offline play</summary>
    <p className="mt-2" role="status">{status}</p>
    <p className="mt-2">Prepare online first in the browser or Home Screen app you will use. After adding it to the Home Screen, open it once online and check readiness there before disconnecting.</p>
    <p className="mt-2">Updates wait until all BuddieBuilder windows close. Clearing browser data can remove offline files. Family-device installation still needs to be checked.</p>
  </details>;
}
