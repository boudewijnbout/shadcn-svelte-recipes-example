<script lang='ts'>
    import * as Card from '$lib/components/ui/card';
    import { Button } from "$lib/components/ui/button";
    import { Badge } from "$lib/components/ui/badge";

    export let data;
    const recipes = data.recipes;    
</script>

<main>
    <div class='grid grid-cols-3 gap-8'>
        {#each recipes as recipe}
            <Card.Root>
                <Card.Header>
                    <div>
                        <Card.Title>{recipe.title}</Card.Title>
                        <Card.Description>{recipe.id} minutes to cook</Card.Description>
                    </div>
                </Card.Header>
                
                <Card.Content>
                    <p>{recipe.body}</p>
                </Card.Content>

                <Card.Footer class='flex justify-between'>
                    <Button>View Recipe</Button>
                    <Badge variant='secondary'>Badge</Badge>
                </Card.Footer>
            </Card.Root>
        {/each}
    </div>
</main>