const customAttributes: { [index: string]: string } = {
    color: 'swatch'
};

const getOptionType = (attributeCode: string): string =>
    customAttributes[attributeCode];

export default getOptionType;
