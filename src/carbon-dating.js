const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
    if(!sampleActivity || typeof sampleActivity !== 'string') return false;
    const floatSampleActivity = parseFloat(sampleActivity);
    if(isNaN(floatSampleActivity)) return false;
    if(floatSampleActivity > MODERN_ACTIVITY || floatSampleActivity <= 0) return false;
    let k = 0.693/HALF_LIFE_PERIOD;
    let t = Math.log(MODERN_ACTIVITY/floatSampleActivity)/k;
    return Math.ceil(t);
};
