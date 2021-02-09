const getTransformedAddress = address => ({
    firstname: address.firstname || '',
    lastname: address.lastname || '',
    company: address.company || '',
    street: Array.isArray(address.street)
        ? [address.street[0] || '', address.street[1] || '']
        : ['', ''],
    city: address.city || '',
    postcode: address.postcode || '',
    telephone: address.telephone || '',
    region: address.region ? address.region.code : '',
    country_code: address.country ? address.country.code : ''
});

export default getTransformedAddress;
