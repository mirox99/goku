import { useState, useEffect } from 'react';
import { UseAsyncOutput } from '../types/default';

export interface Options {
  callback?: (props?, response?) => void,
}

export const useAsync = (promise, options?: Options): UseAsyncOutput => {
  const [state, setState] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const isFunction = typeof promise === 'function';

  const execute = async (props?) => {
    setLoading(true);
    try {
      const response = isFunction ? await promise(props) : await promise
      setState(response);

      if (options.callback) options.callback({ props, response })

      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };

  useEffect(() => {
    if (!isFunction) execute();
  }, []);

  return { state, loading, error, execute };
};
