import { useEffect, useState } from 'react';
import { AccessibilityInfo } from 'react-native';

// Reduced-motion gate for the Design System Foundation motion contract
// (424-487 governance). Components read this to drop press/scale/lift animations
// when the OS "Reduce Motion" accessibility setting is enabled. Default is
// `false` (motion allowed) until the async query resolves, so first paint never
// blocks on the bridge call.
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    let mounted = true;

    AccessibilityInfo.isReduceMotionEnabled()
      .then((enabled) => {
        if (mounted) setReduced(enabled);
      })
      .catch(() => {
        // If the query fails we keep the safe default (motion allowed).
      });

    const subscription = AccessibilityInfo.addEventListener('reduceMotionChanged', (enabled) => {
      setReduced(enabled);
    });

    return () => {
      mounted = false;
      subscription?.remove?.();
    };
  }, []);

  return reduced;
}

export default useReducedMotion;
