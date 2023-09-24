import { createPortal } from "react-dom";

interface ReactPortalProps {
  children: React.ReactNode;
  wrapperId: string;
}

export function ReactPortal({ children, wrapperId }: ReactPortalProps) {
  const wrapper = document.getElementById(wrapperId);

  if (!wrapper) return;

  return createPortal(children, wrapper);
}
