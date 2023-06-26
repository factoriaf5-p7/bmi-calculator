/* Category	BMI (kg/m2)[c]	BMI Prime[c]
Underweight (Severe thinness)	< 16.0	< 0.64
Underweight (Moderate thinness)	16.0 – 16.9	0.64 – 0.67
Underweight (Mild thinness)	17.0 – 18.4	0.68 – 0.73
Normal range	18.5 – 24.9	0.74 – 0.99
Overweight (Pre-obese)	25.0 – 29.9	1.00 – 1.19
Obese (Class I)	30.0 – 34.9	1.20 – 1.39
Obese (Class II)	35.0 – 39.9	1.40 – 1.59
Obese (Class III)	≥ 40.0	≥ 1.60
 */
interface Bmi {
    category:string;
    min: number;
    max: number;
}

const underweight1 = {
    category: 'Underweight (Severe thinness)',
    min: 0,
    max: 15.9,

}

const normal = {
    category: 'Normal range',
    min: 18.5,
    max: 24.9,

}

const tablaBmi:Array<Bmi> = [underweight1,normal];


export const bmiCalculator = (height:number,weight:number) => {
    // return 22.84;
    const result = (weight/Math.pow(height/100,2))//.toFixed(2);
    // console.log(result);
    const bmiResult = tablaBmi.filter(elemento => result >= elemento.min && result <= elemento.max)
    return bmiResult[0].category;
}