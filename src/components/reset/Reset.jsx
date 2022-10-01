import { ResetButton } from "./Reset.style";

export default function Reset({ reset }) {
  return (
    <ResetButton
      animate={{
        scale: [1, 1.2, 1.2, 1, 1],
      }}
      onClick={reset}
    >
      Restart
    </ResetButton>
  );
}
