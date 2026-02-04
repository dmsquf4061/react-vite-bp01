import { X } from "lucide-react";

function ProcessModal({ isOpen, workId, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center bg-black/55 backdrop-blur-sm p-6 md:p-12"
      onClick={onClose}
    >
      <div
        className="relative flex h-full w-full flex-col items-center justify-center rounded-xl bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded p-2 transition-colors text-[var(--primary-foreground)] hover:text-[var(--muted-foreground)] cursor-pointer"
        >
          <X className="text-[var(--primary-foreground)]" />
        </button>

        <div className="">
          workId: {workId}
        </div>
      </div>
    </div>
  );
}

export default ProcessModal;
