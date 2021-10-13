export const redirectTo = (history, path) => () => {
    history.push(path);
};

export const goBack = (history) => () => {
    history.goBack();
};
