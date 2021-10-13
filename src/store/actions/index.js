const context = new Map();

export const getAction = (Action) => {
    if (context.has(Action)) {
        return context.get(Action);
    }

    const action = new Action();
    context.set(Action, action);
    return action;
};
