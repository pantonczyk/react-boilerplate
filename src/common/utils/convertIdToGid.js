import { Buffer } from 'buffer';

export const convertIdToGid = (nodeName, id) => {
    return Buffer.from(`${nodeName}:${id}`).toString('base64');
};
