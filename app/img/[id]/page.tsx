import FullPageImageView from "@/components/full-image-page"

export default async function PhotoPage(
    {
        params,
    }: {
        params: Promise<{
            id: string
        }>
    }) {
        const { id } = await params;
        console.log("asd image",{params})

        const idAsNumber = Number(id);
        if (Number.isNaN(idAsNumber)) {
            return <div>Invalid image ID</div>
        }
        console.log("PhotoPage", {id, idAsNumber})
       return <FullPageImageView id={idAsNumber}/>
}