const undo = (history) => {
    if (!history || history.length === 0) {
        return {
            history: [],
            recipe: []
        };
    }

    const newHistory = history.slice(0, history.length - 1);
    const previousRecipe = history[history.length - 1];

    return {
        history: newHistory,
        recipe: previousRecipe
    };
};

module.exports = undo;