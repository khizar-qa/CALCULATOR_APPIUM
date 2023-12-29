
/**
 * page containing add method and selectors
 */

class addition {

    //digits
    get button7() {
        return $('id=com.google.android.calculator:id/digit_7');
    }

    get button2() {
        return $('id=com.google.android.calculator:id/digit_2');
    }

    //equal button
    get eqbtn() {
        return $('~equals');
    }

    //result
    get result() {
        return $('id=com.google.android.calculator:id/result_final');
    }

    //add button
    get addbtn() {
        return $('~plus');
    }

    async doSum() {
        console.log("Performing Addition");
        await this.button7.click();
        await this.addbtn.click();
        await this.button2.click();
        await this.eqbtn.click();
        await expect(this.result).toHaveText('9');
    }
}

module.exports = new addition();
