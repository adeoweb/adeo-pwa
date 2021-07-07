import React, { FunctionComponent } from 'react';

import Items from 'src/lib/components/Header/TopBar/LeftBlock/Language/Items';
import { DEFAULT_LANG } from 'src/lib/constants/language';
import { TStore } from 'src/lib/types/graphql/Store';
import { useAppContext } from 'src/peregrine/lib/context/adeoweb/app';
import { useStoreList } from 'src/peregrine/lib/talons/adeoweb/App/useStoreList';

import GET_STORE_LIST from '../../../../../queries/getStoreList.graphql';
import SelectedItem from './SelectedItem';

const getStoreByLang = (
    lang: string,
    stores: TStore[] = []
): TStore | undefined => {
    return stores.find(store => store.locale?.indexOf(lang) === 0);
};

const Language: FunctionComponent = () => {
    const [{ activeStore }, { setActiveStore }] = useAppContext();
    const { loading, error, data } = useStoreList({
        query: GET_STORE_LIST
    });

    if (loading || error || !data || data.length <= 1) {
        return null;
    }

    const selectedItem =
        activeStore || getStoreByLang(DEFAULT_LANG, data) || null;

    if (!selectedItem) {
        return null;
    }

    return (
        <div className="header-dropdown">
            <SelectedItem item={selectedItem} />
            <Items items={data} onSelect={setActiveStore} />
        </div>
    );
};

export default Language;
