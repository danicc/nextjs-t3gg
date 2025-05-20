import { getImage } from "@/server/queries"
import { clerkClient } from "@clerk/nextjs/server"

export default async function FullPageImageView(props: { id: number }) {
    const image = await getImage(props.id)

    if (!image) {
        return <div>Image not found</div>
    }
    const clerkClientResponse = await clerkClient();
    const uploaderInfo = await clerkClientResponse.users.getUser(image.userId)
    
    return (
        <div className="min-w-0 flex w-full h-full">
            <div className="flex-shrink flex justify-center items-center">
                <img src={image.url} className="flex-shrink object-contain" />
            </div>
            
            <div className="flex flex-col flex-grow-1 flex-shrink-0 border-l gap-2" >
                <div className="text-2xl font-bold border-b text-center p-2">{image.name}</div>
                <div className="flex flex-col">
                    <span>Uploaded By:</span>
                    <span>{uploaderInfo.fullName}</span>
                </div>
                <div className="flex flex-col">
                    <span>Created On:</span>
                    <span>{new Date(image.createdAt).toLocaleDateString()}</span>
                </div>
            </div>
        </div>
    )
}