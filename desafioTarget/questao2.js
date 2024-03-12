function fibonacci(index){
    let sequence = [0,1]
    for (let i = 2; i<= index; i++){
        sequence [i] = sequence [i-1] + sequence [i-2];
    }
    console.log(sequence[index])
}

fibonacci(7)
