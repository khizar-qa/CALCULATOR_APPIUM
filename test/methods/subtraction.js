/**
 * page containing subtract method and selectors
 */

class subtraction {

    //digits
    get button4() {
        return $('id=com.google.android.calculator:id/digit_4');
    }

    get button6() {
        return $('id=com.google.android.calculator:id/digit_6');
    }

    //equal button
    get eqbtn() {
        return $('~equals');
    }

    //subtract button
    get subbtn() {
        return $('~minus');
    }

    //result
    get result() {
        return $('id=com.google.android.calculator:id/result_final');
    }

    async doSub() {
        console.log("Performing Subtraction");
        await this.button6.click();
        await this.subbtn.click();
        await this.button4.click();
        await this.eqbtn.click();
        await expect(this.result).toHaveText('2');
    }
}

module.exports = new subtraction();
