/*
Given a full sudoku board, return 'solved' if the board is solved, or 'invalid' if the board is invalid.
A sudoku board is solved if each column, row, and 3 x 3 subgrid contains all of the digits from 1 to 9.
Input: A String representing the board. 
Output: 'solved' if the board is valid, 'invalid' if it isn't
Example input: 
"735814296\n
896275314\n
214963857\n
589427163\n
362189745\n
471356982\n
923541678\n
648792531\n
157638429"
*/



function sudokuChecker(board) {
    // Your code here.
    var row = {}
    var col = {}
    var square = {}
    for (let i = 0; i < board.length; i++) {
        if(board[i] == '\n'){
            i++
            row = {}
        }
        if(!row[board[i]]) row[board[i]] = true
        else return false
       }
    let i = 0
    let j = 0
    let place = 0 
    while(i< (board.length + 1) / 10){
        if(j >= (board.length + 1) / 10){
            j=0
            i += 1
            place = i
            col = {}
        }
        if(!col[board[place]]) col[board[place]] = true
        else return false
        place += 10
        j+=1

    }
    for (let bounce = 0; bounce <= 6; bounce+=3) {
        for (let index = 0; index < board.length; index+=10) {
            if(!(index%3)) square = {}
            
            for (let jndex = 0; jndex < 3; jndex++) {
                if(!square[board[(index + jndex) + bounce]]) square[board[(index + jndex) + bounce]] = true
                else return false
            }
            
        }
        
    }


    return true
  }


  
  console.log(sudokuChecker("735814296\n896275314\n214963857\n589427163\n362189745\n471356982\n923541678\n648792531\n157638429"))