import FullPageImageView from "@/components/full-page-image"

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
       return <FullPageImageView id={idAsNumber}/>
}