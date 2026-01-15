const find = (recipe, substring) => {
    if (!substring) {
        return [];
    }

    const needle = substring.toLowerCase();
    return recipe.filter((item) =>
        item.toLowerCase().includes(needle)
    );
};

// module.exports = find;
export default find;