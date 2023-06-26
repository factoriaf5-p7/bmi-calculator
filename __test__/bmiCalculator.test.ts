import { bmiCalculator } from '../bmiCalculator';
// test('1+1 = 2',()=>expect(1+1).toBe(2));

describe('bmiCalculator',()=>{
    it('bmiCalculator should be a function',()=>{
        expect(typeof bmiCalculator).toBe('function');
    })
    // it('bmiCalculator should return 22.84 when arguments are 180 and 74', ()=>{
    //     expect(bmiCalculator(180,74)).toBe(22.84);
    // })
    it('bmiCalculator should return "Normal range" when arguments are 180 and 74', ()=>{
        // expect(bmiCalculator(180,74)).toBe(22.84);
        expect(bmiCalculator(180,74)).toBe("Normal range");
    })
})

