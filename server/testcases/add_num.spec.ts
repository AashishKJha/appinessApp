import * as assert from 'assert';

import Numbers from './add_num';

describe('Method', function(){
    it("should return 5 for a =3 and b = 2", function(){
        var num = new Numbers();
        assert.equal(num.addNumber(3,2), 5)
    })
})