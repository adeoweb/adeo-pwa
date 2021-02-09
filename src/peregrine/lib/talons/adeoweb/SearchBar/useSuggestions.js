import { useCallback } from 'react';

/**
 * Returns props necessary to render a Suggestions component.
 *
 * @param {Object} props
 * @param {Object} props.items - product data from search results
 * @param {Function} props.setVisible - callback to set `visible` state
 * @param {Boolean} props.visible - whether the component is visible
 */
export const useSuggestions = props => {
    const { items, setVisible, visible } = props;

    // hide after navigating to a suggested product
    const onNavigate = useCallback(() => {
        setVisible(false);
    }, [setVisible]);

    // avoid rendering if data is empty
    const shouldRender = !!(visible && items && items.length);

    return {
        onNavigate,
        shouldRender
    };
};
