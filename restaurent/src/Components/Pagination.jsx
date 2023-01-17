function createArrayOfSize(n) {
  return new Array(n).fill(0);
}

function Pagination({totalPages,currentPage,handlePageChange}) {
  let pages = createArrayOfSize(totalPages).map((a,i) => {
   return( 
   <button
   className="pagesbtn"
    data-testid="page-btn" 
    onClick={()=>handlePageChange(i+1)}
    disabled={currentPage===i+1}
    key={`page--${i+1}`}
    >
     {i+1}
      
      </button>
   )
  });
  return  totalPages!==0 && pages;
}

export default Pagination;
