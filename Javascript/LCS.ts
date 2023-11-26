// Longest Common Subsequence Problem
// e.g. 
//   string x = "xabcy"
//   string y = "tapbcxx"
//   LCS(x,y) = "abc"
function LCS(x:string, y:string): string {
    // initialize
    let memo: number[][] = [];
    let row: number[] = [];

    for (let i = 0; i < y.length + 1; i++) {
        row.push(0);
    }

    for (let i = 0; i < x.length + 1; i++) {
        memo.push(row.slice());
    }

    for (let i = 1; i < x.length + 1; i++) {
        for (let j = 1; j < y.length + 1; j++) {
            if (x[i-1] == y[j-1]) {
                memo[i][j] = memo[i-1][j-1] + 1;
            }
            else {
                memo[i][j] = Math.max(memo[i][j-1], memo[i-1][j]);
            }
        }
    }

    let i: number = x.length;
    let j: number = y.length;
    let out: string = "";

    while (i>0 && j>0) {

        if (memo[i][j-1] > memo[i-1][j]) {
            j--;
        }
        else if (memo[i-1][j] > memo[i][j-1]) {
            i--;
        }
        else if (memo[i][j-1] == memo[i][j]) {
            j--;
        }
        else {
            out = x[i-1] + out;
            i--;
            j--;
        }
    }

    // console.log(memo);

    return out;

}

console.log(LCS('gabcde', 'awberc'));

