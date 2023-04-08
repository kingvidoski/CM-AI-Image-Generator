export async function GET(request: Request) {
    const response = await fetch("https://new-image-generator.azurewebsites.net/api/getimages", {
        cache: "no-store",
    });

    const blob = await response.blob();
    const textDate = await blob.text();

    const data = JSON.parse(textDate);

    return new Response(JSON.stringify(data), {
        status: 200,
    })
}