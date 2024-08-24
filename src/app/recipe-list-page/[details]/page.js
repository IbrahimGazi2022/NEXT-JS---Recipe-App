import RecipeDetailsCom from '@/components/recipe-details-com';

async function fetchRecipeDetails(currentId) {
    try {
        const apiResonse = await fetch(`https://dummyjson.com/recipes/${currentId}`);
        const data = await apiResonse.json();
        return data;
    } catch (error) {
        throw new Error(error);
    }
}

const RecipeDetails = async ({ params }) => {
    const getRecipeDetails = await fetchRecipeDetails(params?.details);
    return (
        <RecipeDetailsCom getRecipeDetails={getRecipeDetails} />
    );
};

export default RecipeDetails;
