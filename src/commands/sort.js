const sortRecipe = (recipe, direction = 'asc') => {
    if (direction !== 'asc' && direction !== 'desc') {
        return recipe.slice();
    }

    const copy = recipe.slice();
    copy.sort((a, b) => a.localeCompare(b));

    if (direction === 'desc') {
        copy.reverse();
    }

    return copy;
};

export default sortRecipe;