/**
 * page containing multiply method and selectors
 */

class multiplication {

    //digits
    get button8() {
        return $('id=com.google.android.calculator:id/digit_8');
    }

    get button5() {
        return $('id=com.google.android.calculator:id/digit_5');
    }

    //equal button
    get eqbtn() {
        return $('~equals');
    }

    //multiply button
    get mulbtn() {
        return $('~multiply');
    }

    //result
    get result() {
        return $('id=com.google.android.calculator:id/result_final');
    }

    async doMul() {
        console.log("Performing Multiplication");
        await this.button8.click();
        await this.mulbtn.click();
        await this.button5.click();
        await this.eqbtn.click();
        await expect(this.result).toHaveText('40');
    }
}

module.exports = new multiplication();
