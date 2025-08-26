import PaginationBtn from "@/components/ui/buttons/paginationBtn";

const Pagination = () => {
  return (
    <div className="mt-4 sm:mt-6 hidden justify-center items-center gap-1 sm:gap-2 absolute  sm:bottom-3 left-0 right-0 sm:flex">
      <PaginationBtn name="1" />
      <PaginationBtn name="2" isActive={true} />
      <PaginationBtn name="3" />
      <span className="text-xs sm:text-sm text-gray-600">...</span>
      <PaginationBtn name="10" />
    </div>
  );
};

export default Pagination;
