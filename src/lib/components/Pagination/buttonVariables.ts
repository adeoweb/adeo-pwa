interface INavIcons {
    [index: string]: string;
}

interface IPage {
    name: string;
    buttonLabel: string;
}

interface INavButtons {
    prevPage: IPage;
    nextPage: IPage;
}

export const navIcons: INavIcons = {
    ChevronLeft: 'icon-angle-left',
    ChevronRight: 'icon-angle-right'
};

export const navButtons: INavButtons = {
    prevPage: {
        name: 'ChevronLeft',
        buttonLabel: 'move to the previous page'
    },
    nextPage: {
        name: 'ChevronRight',
        buttonLabel: 'move to the next page'
    }
};
