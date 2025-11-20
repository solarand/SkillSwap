import PaginationBtn from "@/components/ui/buttons/paginationBtn";

const Pagination = ({
  pages,
  pageActive = 1,
  setPage,
}: {
  pages: number;
  pageActive?: number;
  setPage: (page: number) => void;
}) => {
  const pageNumbers = Array.from({ length: pages }, (_, i) => i + 1);

  return (
    <div className="mt-4 sm:mt-6 hidden justify-center items-center gap-1 sm:gap-2 min-[1414px]:absolute sm:bottom-5 left-0 right-0 sm:flex">
      {/* <PaginationBtn name="1" />
      <PaginationBtn name="2" isActive={true} />
      <PaginationBtn name="3" /> */}
      {pageNumbers.map((pageNumber) => (
        <PaginationBtn
          name={String(pageNumber)}
          key={pageNumber}
          isActive={pageActive === Number(pageNumber)}
          onClick={setPage}
        />
      ))}
    </div>
  );
};

export default Pagination;
