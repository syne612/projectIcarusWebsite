import UIKit

//this function prints an aray in the form of a dimond

func diamond(_ size: Int) -> String {
    
    var x = size
    var f = [1, (x - 2)]
    while x > 0 {
        f += [x]
        x -= 2
        
        for _ in f {
        }
    }
    return "\(f)"
}
    
  

