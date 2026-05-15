declare module 'react-native' {
  export const SafeAreaView: any;
  export const Text: any;
  export const View: any;
}

declare module 'expo-router' {
  export const Stack: any;
  export const Link: any;
  export function useLocalSearchParams<T = Record<string, string>>(): T;
}

declare module '@supabase/supabase-js' {
  export function createClient(url: string, key: string): any;
}

declare module 'react/jsx-runtime' {
  export const jsx: any;
  export const jsxs: any;
  export const Fragment: any;
}

declare module 'node:fs' {
  export function writeFileSync(path: string, data: string): void;
}

declare const process: {
  env: Record<string, string | undefined>;
};

declare module 'react' {
  export function useEffect(effect: () => void, deps?: unknown[]): void;
  export function useMemo<T>(factory: () => T, deps: unknown[]): T;
  export function useState<T>(initial: T): [T, (value: T | ((prev: T) => T)) => void];
}
