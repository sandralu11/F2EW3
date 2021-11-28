import axios from "axios";
import jsSHA from "jssha";


const getApi ={
    getRoute(busName = ''){
        return new Promise((resolve, reject) => {
            let url=`https://ptx.transportdata.tw/MOTC/v2/Bus/Route/City/Taipei/${busName}?$top=30&$format=JSON`
            
            axios.get(
                url,
                {
                    headers: getAuthorizationHeader()
                }
                )
            .then(function (response) {
                resolve(response.data) 
            })
            .catch(function (error) {
                reject(error)
            }); 
        });
    },
    getSequence(){
        return new Promise((resolve, reject) => {
            let url=`https://ptx.transportdata.tw/MOTC/v2/Bus/StopOfRoute/City/Taipei/307?$top=30&$format=JSON`
            
            axios.get(
                url,
                {
                    headers: getAuthorizationHeader()
                }
                )
            .then(function (response) {
                resolve(response.data) 
            })
            .catch(function (error) {
                reject(error)
            }); 
        });
    },
    getArrival(){
        return new Promise((resolve, reject) => {
            let url=`https://ptx.transportdata.tw/MOTC/v2/Bus/EstimatedTimeOfArrival/City/Taipei/307?$top=30&$format=JSON`
            
            axios.get(
                url,
                {
                    headers: getAuthorizationHeader()
                }
                )
            .then(function (response) {
                resolve(response.data) 
            })
            .catch(function (error) {
                reject(error)
            }); 
        });
    },

}

export default getApi

function getAuthorizationHeader() {
 //  填入自己 ID、KEY 開始
        let AppID = process.env.VUE_APP_ID;
        let AppKey = process.env.VUE_APP_KEY;
    //  填入自己 ID、KEY 結束
        let GMTString = new Date().toGMTString();
        let ShaObj = new jsSHA('SHA-1', 'TEXT');
        ShaObj.setHMACKey(AppKey, 'TEXT');
        ShaObj.update('x-date: ' + GMTString);
        let HMAC = ShaObj.getHMAC('B64');
        let Authorization = 'hmac username=\"' + AppID + '\", algorithm=\"hmac-sha1\", headers=\"x-date\", signature=\"' + HMAC + '\"';
        return { 'Authorization': Authorization, 'X-Date': GMTString }; 
}
