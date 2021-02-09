export interface IPaginationProps {
    currentPage: number;
    setPage: (page: number) => void;
    totalPages: number;
}
