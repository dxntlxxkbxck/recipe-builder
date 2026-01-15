const undo = (history) => {
    if (!Array.isArray(history) || history.length === 0) {
        return null;
    }

    return history[history.length - 1];
};

export default undo;
