export interface UseAsyncOutput {
  state: any | null,
  loading: boolean,
  error: string | null,
  execute: (props: any) => any
}