function sotr_mass(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i; j < array.length; j++) {
            
            if (array[i]<array[j]) {
            
                const element = array[j];
                array[j] = array[i];
                array[i] = element
            
            }
        }
        
    }
}

function revers_mass(array) {

    for (let index = 0; index < Math.floor(array.length/2); index++) {
        const element = array[index];
        array[index] = array[array.length - index - 1];
        array[array.length - index - 1] = element;
    }

}

function sum_mass(array) {
    let sum = 0; 
    for (let index = 0; index < array.length; index++) {
        sum += array[index];
        
    }
    return sum;
}
