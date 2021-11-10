export const isEmpty = (obj) => Object.keys(obj).length === 0;

export const formatDate = (timestamp) => {
    const d = new Date(timestamp);
    return d.toLocaleDateString();
};
