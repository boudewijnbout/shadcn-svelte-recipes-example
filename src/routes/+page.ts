export async function load() {
    const results = await fetch('https://jsonplaceholder.typicode.com/posts');
    const recipes = await results.json();

    return {
        recipes,
    };
}