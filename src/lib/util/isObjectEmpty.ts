export default (obj: Record<string, any>): boolean =>
    Object.keys(obj).length === 0 && obj.constructor === Object;
