import { Button } from "@chakra-ui/react";

function Pagination({current,onchange}) {
    const prev = <Button style={{border:"none",padding:"5px",color:"white",backgroundColor:"black",margin:"5px"}} onClick={()=>onchange(current-1)} disabled={current===1} >PREV</Button>;

    const currentPage = <Button style={{border:"none",padding:"5px",color:"white",backgroundColor:"black",margin:"5px"}}>{current}</Button>;


    const next = <Button style={{border:"none",padding:"5px",color:"white",backgroundColor:"black",margin:"5px"}} onClick={()=>onchange(current+1)} disabled={current===4}>NEXT</Button>;

    return (
      <div>
        {prev}
        {currentPage}
        {next}
        
      </div>
    );
  }
  
  export default Pagination;
  