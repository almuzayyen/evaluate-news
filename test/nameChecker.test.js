

import { validate } from "../src/client/js/nameChecker"
/*let names = [
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
})*/

let url = 'www.googel.com'

test('check url vaild formate ',() =>{
    expect(url).toMatch(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g)
})