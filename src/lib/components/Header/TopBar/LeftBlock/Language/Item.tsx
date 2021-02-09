import React, { FunctionComponent } from 'react';
import { TStore } from 'src/lib/types/graphql/Store';
import flagLt from 'src/static/icons/flags/lt.png';
import flagRu from 'src/static/icons/flags/ru.png';
import flagEn from 'src/static/icons/flags/en.png';
import flagLv from 'src/static/icons/flags/lv.png';
import flagEt from 'src/static/icons/flags/et.png';

type TItemProps = {
    item: TStore;
    onSelect: (store: TStore) => void;
};

const FLAGS = new Map()
    .set('en', flagEn)
    .set('et', flagEt)
    .set('lt', flagLt)
    .set('lv', flagLv)
    .set('ru', flagRu);

const Item: FunctionComponent<TItemProps> = ({ item, onSelect }) => {
    const { store_name: storeName, locale } = item;
    const [lang] = locale.split('_');
    let img: JSX.Element | null = null;

    if (FLAGS.has(lang)) {
        img = <img src={FLAGS.get(lang)} alt={locale} />;
    }

    return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a href="#" onClick={() => onSelect(item)}>
            {img}
            {storeName}
        </a>
    );
};

export default Item;
