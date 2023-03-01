import { component$, type Signal, useSignal } from "@builder.io/qwik";

export function useMySignal() {
  const signal = useSignal<number>(1);

  return { signal };
}

export const Child = component$((props: { signal: Signal<number> }) => {
  return <>{props.signal.value}</>;
});

export default component$(() => {
  const { signal } = useMySignal();

  return <Child signal={signal} />;
});
