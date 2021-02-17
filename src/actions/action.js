export const increment = (incnum) =>{
    return {
        type:"INCREMENT",
        payload:incnum
    }
}
export const decrement = () =>{
    return {
        type:"DECREMENT"
    }
}