
import { checkForName } from "../src/client/js/nameChecker"
let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou"
    ]
test('check form name ', () =>{
     //expect(functions.add(2,2)).toBe(4);
    expect(names).toContain('Picard')
    // window.alert = jsdomAlert;
})