const list = (recipe) => {
    return recipe.map((item, index) => `${index + 1}. ${item}`);
};

// module.exports = list;
export default list;