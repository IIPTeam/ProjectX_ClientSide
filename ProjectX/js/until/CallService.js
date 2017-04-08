'use strict';

export default class CallService {
    static fetchNetRepository(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
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
