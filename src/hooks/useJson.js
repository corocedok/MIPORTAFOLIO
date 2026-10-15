import { useEffect, useState } from 'react';

/** Lee un archivo JSON y expone { data, error, loading } como estado de React. */
export function useJson(url) {
  const [state, setState] = useState({ data: null, error: null, loading: true });
  useEffect(() => {
    let vivo = true;
    fetch(url)
      .then((r) => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.json(); })
      .then((data) => vivo && setState({ data, error: null, loading: false }))
      .catch((error) => vivo && setState({ data: null, error, loading: false }));
    return () => { vivo = false; };
  }, [url]);
  return state;
}
