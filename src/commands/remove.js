const remove = (recipe, ingredient) => {
    const index = recipe.indexOf(ingredient);
    if (index === -1) {
        return recipe.slice();
    }
    return [...recipe.slice(0, index), ...recipe.slice(index + 1)];
};

module.exports = remove;