

export const viewAllOrders = (req, res)=>{
    console.log("All Orders loaded");    
    res.send("All Orders ");
    res.end();

}

export const addOrder = (req, res)=>{
    console.log("Order added");
    res.send("Order added ");
    res.end();
}

export const viewOrder = (req, res)=>{
    console.log("Single Order laoded");
    res.send("Single Order ");
    res.end();
}

export const editOrder = (req, res)=>{
    console.log("Order edited");
    res.send("Order edited ");
    res.end();
}

export const deleteOrder = (req, res)=>{
    console.log("Order deleted");
    res.send("Order deleted ");
    res.end();
}

