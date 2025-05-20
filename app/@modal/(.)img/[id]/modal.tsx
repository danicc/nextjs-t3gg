'use client'

import { useRouter } from "next/navigation";
import { useRef, useEffect } from "react";
import type { ElementRef } from "react";
import { createPortal } from "react-dom";

export function Modal({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const dialogRef = useRef<ElementRef<"dialog">>(null);

    useEffect(() => {
        if (!dialogRef.current?.open) {
            dialogRef.current?.showModal();
        }
    }, [])

    function onDismiss() {
        router.back();
    }

    return createPortal(
        <dialog ref={dialogRef} className="
        flex items-center justify-center h-screen w-screen
        bg-zinc-900/100 text-white
        " onClose={onDismiss}>
            {children}
            <button onClick={onDismiss} className="close-button" />
        </dialog>
        ,
        document.getElementById("modal-root")! as ElementRef<"div">, // Ensure this is the correct type
    )
}