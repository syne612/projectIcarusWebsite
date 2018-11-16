import UIKit

/*this fuction returns the first prime numbers between m and n that is of "step" g. so if g is 4 between 1 and 10 it would return 1 and 5.*/
func step(_ g: Int, _ m: Int, _ n: Int) -> (Int, Int)! {
    var z = [m]
    var x = m
    let y = n
    while x < y {
        x += 1
        z += [x]
    }
    var k = 2
    while k < n {
        for i in z {
            if i % k == 0 && i != k {
                let index = z.index(of: i)
                z.remove(at: index!)
            }
          
        }
    k += 1
    }
    var a = z[0]
    var p = [Int()]
    while p == [0] {
        switch p == [0] {
            case z != [0] && z != [a]:
                for b in z {
                    if a + g == b {
                        p = [a, b]
                    }
                }
                a = z[1]
                z.replaceSubrange(0...1, with: [a])
            case z == [a]:
                p = [1]
            default:
                p = [1]
        }
    }
    if p == [1] {
        return (0, 0)
    }
        return (p[0], p[1])
    
  
}
print (step(13, 12, 1800))
