import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { SimpleUploadButton } from "./simple-upload-button";

export function TopNav() {
  return (
    <nav className="flex w-full items-center justify-between border-b p-4">
      <h1 className="text-2xl font-bold">Gallery</h1>
      
      <SignedOut>
        <SignInButton />
      </SignedOut>

      <SignedIn>
        <div className="flex flex-row gap-4 items-center">
          {/* <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
              // Refresh current route to load latest uploaded image
              router.refresh();
            }}
            onUploadError={(error: Error) => {
              // Do something with the error.
              alert(`ERROR! ${error.message}`);
            }}
          /> */}
          <SimpleUploadButton />
          <UserButton />
        </div>
      </SignedIn>
    </nav>
  )
}