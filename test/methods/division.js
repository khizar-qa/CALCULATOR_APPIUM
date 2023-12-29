
/**
 * page containing multiply method and selectors
 */

class division {

    //digits
    get button3() {
        return $('id=com.google.android.calculator:id/digit_3');
    }

    get button9() {
        return $('id=com.google.android.calculator:id/digit_9');
    }

    //equal button
    get eqbtn() {
        return $('~equals');
    }

    //divide button
    get divbtn() {
        return $('~divide');
    }

    //result
    get result() {
        return $('id=com.google.android.calculator:id/result_final');
    }

    async doDiv() {
        console.log("Performing Division");
        await this.button9.click();
        await this.divbtn.click();
        await this.button3.click();
        await this.eqbtn.click();
        await expect(this.result).toHaveText('3');
    }

}

module.exports = new division();
