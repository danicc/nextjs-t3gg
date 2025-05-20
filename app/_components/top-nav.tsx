'use client';

import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { UploadButton } from "../utils/uploadthing";
import { useRouter } from "next/navigation";

export function TopNav() {
  const router = useRouter();

  return (
    <nav className="flex w-full items-center justify-between border-b p-4">
      <h1 className="text-2xl font-bold">Gallery</h1>
      
      <SignedOut>
        <SignInButton />
      </SignedOut>

      <SignedIn>
        <div className="flex flex-row gap-8">
          <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
              // Refresh current route to load latest uploaded image
              router.refresh();
            }}
            onUploadError={(error: Error) => {
              // Do something with the error.
              alert(`ERROR! ${error.message}`);
            }}
          />
          <UserButton />
        </div>
      </SignedIn>
    </nav>
  )
}