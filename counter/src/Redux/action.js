//DO NOT change the function names
import { ADD,REDUCE } from "./actionTypes";

//function to return the add action object
const handleAddActionObj = () => {
return ({
    type:ADD
})
};

//function to return the reduce action object
const handleReduceActionObj = () => {
    return ({
        type:REDUCE
    })

};

export { handleAddActionObj, handleReduceActionObj };
