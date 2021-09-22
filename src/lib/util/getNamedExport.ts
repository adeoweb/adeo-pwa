import { ReactText } from 'react-router/node_modules/@types/react';

/**
 * Retrieve a single exported binding from a module.
 *
 * @param {object} obj - A module's namespace object
 * @param {string} name - The binding to retrieve
 * @returns {Promise<*>}
 */
const getNamedExport = (
    obj: Record<string, ReactText>,
    name = 'default'
): Promise<ReactText> =>
    Promise.resolve(obj).then(mod => {
        if (!mod || typeof mod !== 'object') {
            throw new Error('Invalid namespace object provided.');
        }

        if (!mod[name]) {
            throw new Error(`Binding ${name} not found.`);
        }

        return mod[name];
    });

export default getNamedExport;
