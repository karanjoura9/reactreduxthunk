export const AddCartItem = (itemCount) =>{
        return (dispatch)=>{
            dispatch({
                type:'addItem',
                payload:itemCount
            })
        }
}

export const RemoveCartItem = (itemCount) =>{
    return (dispatch)=>{
        dispatch({
            type:'removeItem',
            payload:itemCount
        })
    }
}