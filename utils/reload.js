export function reload(arr,component,place) {
    place.innerHTML = ""

    for (const elems of arr) {
      
        
        const elem = component(elems)
       
        
        
        place.append(elem)
    }
}