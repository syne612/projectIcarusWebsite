

import UIKit
// disguised sequence
// solving some basic encryption style codewars problems 
func fcn(_ n: UInt64) -> UInt64 {
    var u0 = 1
    var u1 = 2
    var u2 = Int()
    var un = [Int()]
    for _ in 0 ... n {
        u2  =  (6 * u0 * u1) / ((5 * u0) - (u1))
        un += [u0]
        u0 = u1
        u1 = u2
    }
    let x = un.last!
    return UInt64(x)
}


func fvn(_ n: UInt64) -> UInt64 {
    var u = 1
    var x = 0
    while x < n {
        u *= 2
        x += 1
    }
    return UInt64(u)
}
fvn(4)
fcn(4)
fvn(5)
fcn(5)



func solution(_ num: Int) -> Int {
    var a = [Int()]
    var x = 0
    while x < num {
        if x % 5 == 0 && x != 0 {
            a += [x]
        }
        if x % 3 == 0 && x % 5 != 0 {
            a += [x]
        }
        x += 1
    }
    
    return a.reduce(0, +)
}
solution(10)

