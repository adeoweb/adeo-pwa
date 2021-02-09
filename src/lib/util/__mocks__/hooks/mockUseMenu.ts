import { TUseMenu } from 'src/peregrine/lib/talons/adeoweb/Menu/useMenu';

const mock: TUseMenu = {
    error: null,
    children: [
        {
            children_count: '2',
            id: 10,
            include_in_menu: 1,
            name: 'Mock name',
            position: 2,
            url_path: 'mockurl.html',
            children: [
                {
                    children_count: '2',
                    id: 11,
                    include_in_menu: 1,
                    name: 'Mock second name - 1',
                    position: 1,
                    url_path: 'urlpath/path.html',
                    children: [
                        {
                            children_count: '0',
                            id: 123,
                            include_in_menu: 1,
                            name: 'Mock third name - 1',
                            position: 1,
                            url_path: 'urlpath/path.html',
                            children: []
                        },
                        {
                            children_count: '0',
                            id: 124,
                            include_in_menu: 1,
                            name: 'Mock third name - 2',
                            position: 2,
                            url_path: 'urlpath/path.html',
                            children: []
                        }
                    ]
                },
                {
                    children_count: '0',
                    id: 12,
                    include_in_menu: 1,
                    name: 'Mock second name - 1',
                    position: 2,
                    url_path: 'urlpath/path.html',
                    children: []
                }
            ]
        }
    ]
};

export default mock;
