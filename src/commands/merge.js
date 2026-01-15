const merge = (recipe, csvList) => {
    if (!csvList || typeof csvList !== 'string') { // guard expression
        return recipe.slice();
    }

    const parsed = csvList
        .split(',')
        .map((s) => s.trim())
        .filter((s) => s.length > 0);

    return [...recipe, ...parsed];
}

//module.exports = merge;
export default merge;