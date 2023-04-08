export async function GET(request: Request) {

    //Connect to our Microsoft Azure function endpoint
    const response = await fetch("https://new-image-generator.azurewebsites.net/api/newgetchatgptsuggestion", {
        cache: 'no-store'
    });


    const textData = await response.text();


    return new Response(JSON.stringify(textData.trim()), {
        status: 200,
    });
}