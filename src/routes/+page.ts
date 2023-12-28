export async function load() {
    const results = await fetch('https://jsonplaceholder.typicode.com/posts');

    // Delay the response

    const recipes = await results.json();

    return {
        recipes,
    };
}