const isItemMissingOptions = (cartItem, configItem, numSelections) => {
    // Non-configurable products can't be missing options
    if (cartItem.product_type !== 'configurable') {
        return false;
    }

    // Configurable products are missing options if we have fewer
    // option selections than the product has options.
    const { configurable_options } = configItem;
    const numProductOptions = configurable_options.length;

    return numSelections < numProductOptions;
};

export default isItemMissingOptions;
