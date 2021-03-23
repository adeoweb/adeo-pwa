import { getPageCountInfo } from 'src/lib/util/pageCountHelper';

const pageInfo = {
    totalProducts: 95,
    pageSize: 10,
    currentPage: null
};

test('Produces correct result for first page', () => {
    pageInfo.currentPage = 1;
    expect(getPageCountInfo(pageInfo)).toMatchObject({
        fromProducts: 1,
        toProducts: 10
    });
});

test('Produces correct result for middle page', () => {
    pageInfo.currentPage = 5;
    expect(getPageCountInfo(pageInfo)).toMatchObject({
        fromProducts: 41,
        toProducts: 50
    });
});

test('Produces correct result for last page', () => {
    pageInfo.currentPage = 10;
    expect(getPageCountInfo(pageInfo)).toMatchObject({
        fromProducts: 91,
        toProducts: 95
    });
});
