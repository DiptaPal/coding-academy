const addToLocalStore = (time) =>{
    localStorage.setItem('break-time', time);
}

const getStoredTime = () =>{
    let addingTime;
    const addedTime = localStorage.getItem('break-time');
    if(addedTime){
        addingTime = JSON.parse(addedTime);
    }
    else{
        addingTime = 0;
    }
    return addingTime;
}

export {
    addToLocalStore, 
    getStoredTime
};