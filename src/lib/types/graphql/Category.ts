import { TProduct } from 'src/lib/types/graphql/Product';
import { TBreadcrumb } from 'src/lib/types/graphql/Breadcrumb';
import { TSearchResultPageInfo } from 'src/lib/types/graphql/SearchResultPageInfo';
import { TCmsBlock } from 'src/lib/types/graphql/CmsBlock';

export type TCategoryInterface = {
    automatic_sorting?: string;
    available_sort_by?: string[];
    breadcrumbs?: TBreadcrumb[];
    canonical_url?: string;
    children_count?: string;
    cms_block?: TCmsBlock;
    created_at?: string;
    custom_layout_update_file?: string;
    default_sort_by?: string;
    description?: string;
    display_mode?: string;
    external_id?: number;
    filter_price_range?: number;
    id?: number;
    image?: string;
    include_in_menu?: number;
    is_anchor?: number;
    landing_page?: number;
    level?: number;
    meta_description?: string;
    meta_keywords?: string;
    meta_title?: string;
    name?: string;
    path?: string;
    path_in_store?: string;
    position?: number;
    product_count?: number;
    products?: TCategoryProducts;
    updated_at?: string;
    url_key?: string;
    url_path?: string;
    url_suffix?: string;
};

type TCategoryProducts<T = TCategoryProduct> = {
    items?: T[];
    page_info?: TSearchResultPageInfo;
    total_count?: number;
};

export type TCategoryProduct = TProduct;

export type TCategoryTree<T = TProduct> = {
    children?: TCategoryTree<T>[];
} & TCategoryInterface;
