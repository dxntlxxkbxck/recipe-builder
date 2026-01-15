const sortRecipe = (recipe, direction = 'asc') => {
    const copy = recipe.slice();
    copy.sort((a, b) => a.localeCompare(b));
    if (direction === 'desc') {
        copy.reverse();
    }
    return copy;
}

module.exports = sortRecipe;