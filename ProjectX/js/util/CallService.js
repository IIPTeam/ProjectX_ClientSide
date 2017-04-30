'use strict';

/*export default class CallService {
    static fetchNetRepository(url,options) {
        return new Promise((resolve, reject) => {
            fetch(url,options)
                .then((response) => response.json())
                .catch((error) => {
                    reject(error);
                }).then((responseData) => {
                if (!responseData) {
                    reject(new Error('responseData is null'));
                    return;
                }
                resolve(responseData);
            }).done();
        })
    }
}
*/

export default class CallService {
    static fetchNetRepository(url,options) {
        return new Promise((resolve, reject) => {
            fetch(url,options)
                .then((response) => response.json())
                .then((responseData) => {
                    if (!responseData) {
                        reject(new Error('responseData is null'));
                        return;
                    };
                    resolve(responseData);
                }).catch((error) => {
                    reject(error);
                }).done();
        })
    }
}
