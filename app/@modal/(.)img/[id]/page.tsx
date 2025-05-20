import { Modal } from "./modal"
import FullPageImageView from "@/components/full-image-page"

export default async function PhotoModal({
    params
}: {
    params: Promise<{
        id: string
    }>
}) {
    const { id } = await params;

    const idAsNumber = Number(id);
    if (Number.isNaN(idAsNumber)) {
        return <div>Invalid image ID</div>
    }

    return (
        <Modal>
            <FullPageImageView id={parseInt(id)} />
        </Modal>
    )
}