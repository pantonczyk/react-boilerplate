const AUTH_TOKEN = 'AUTH_TOKEN';

// tokens = { token: "token", refreshToken: "refreshToken" }
export const createSession = (tokens) => {
    localStorage.setItem(AUTH_TOKEN, JSON.stringify(tokens));
};

export const getSession = () => {
    return JSON.parse(localStorage.getItem(AUTH_TOKEN));
};

export const deleteSession = () => {
    localStorage.removeItem(AUTH_TOKEN);
};
