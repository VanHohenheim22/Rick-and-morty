const Pagination = ({ residentsPerPage, totalResidents, paginate, selected }) => {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalResidents / residentsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
      <div className="text-center">
        <div className="pagination">
            {pageNumbers.map((number) => (
                <button 
                key={number}
                onClick={() => paginate(number)}
                className={number === selected ? "selected" : ""}>
                  {number}
                </button>
            ))}
        </div>
      </div>
    );
  };
  
  export default Pagination;