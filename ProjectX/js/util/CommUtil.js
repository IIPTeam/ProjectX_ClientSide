'use strict';

export default class CommUtil {
    static filterHoliday(days){
        return new Promise((resolve, reject) => {
            let url = "http://www.easybots.cn/api/holiday.php?d="+days.toString();
            fetch(url)
                .then((response) => response.json())
                .then((responseData) => {
                    function removeHoliday(day){
                        return responseData[day] == "0";
                    }
                    resolve(days.filter(removeHoliday));
                }).catch((error) => {
                reject(error);
            }).done();
        })
    }
}
