/**
 * Util.js
 */
import { mainWord } from './stores.js'

export const Util = {
    ArrayUtil: {
        shuffle: (arr) => {
            var currentIndex = arr.length,  randomIndex;

            while (currentIndex != 0) {
                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;

                // And swap it with the current element.
                [arr[currentIndex], arr[randomIndex]] = [
                arr[randomIndex], arr[currentIndex]];
            }

            return arr;
        }
    },

    ServiceUtil: {
        loadData: async (url, cacheIt) => {
            let cacheStr = `MHX_APP.${MHX_APP.appId}.${MHX_APP.version}.${url.replace(/[^a-zA-Z0-9]/g,'_')}`
            let data

            if(cacheIt) {
                data = sessionStorage.getItem(cacheStr)

                if(data) return JSON.parse(data)
            }

            try {
                let response = await fetch(url)

                if(response.status == 200) {
                    let json = await response.json()

                    if(cacheIt) sessionStorage.setItem(cacheStr, JSON.stringify(json))

                    return json
                }

                throw new Error("meh, something went wrong", response.status)
            } catch(err) {
                console.error(err) // TypeError: failed to fetch
            }
        },


    },

    StoreUtil: {
        setMainWord: word => $mainWord = word
    },

    URLUtil: {
        getParam: param => {
            let url = new URL(window.location.href)
            return url.searchParams.get(param)
        }
    }
}