
import UIKit
//this funtion will tell you how many squares can be made from a rectangle, and there size.
func sqInRect(_ lng: Int, _ wdth: Int) -> [Int]? {
    var x = lng
    var y = wdth
    var z = x * y
    var f = [Int()]
    while z > 0 {
        if x > y {
            if f == [0] {
                f = [y]
            } else {
                f += [y]
            }
            x -= y
            z = x * y
        }
        if x <= y {
            if f == [0] {
                f = [x]
            } else {
                f += [x]
            }
            y -= x
            z = x * y
        }
        
    }
    return f
}

print (sqInRect(3,5)!)
print (sqInRect(8,12)!)
print (sqInRect(11,7)!)
print (sqInRect(34,9)!)

