const unique = (recipe) => {
    const result = [];
    for (let i = 0; i < recipe.length; i++) {
        const item = recipe[i];
        let found = false;
        for (let j = 0; j < result.length; j ++) {
            if (result[j] === item) {
                found = true;
                break;
            }
        }
        if (!found) {
            result.push(item);
        }
    }
    return result;
}

module.exports = unique;