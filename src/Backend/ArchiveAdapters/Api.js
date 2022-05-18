import axios from "axios";



const baseURL = "https://localhost:5001/";

class ServerHandlerError extends Error {

    constructor(err) {

        super(err.message);

        switch (err.response.status) {
            case 404:
                this.message = "not found"
                break;
            case 400:
                this.message = "The submitted information is incomplete"
                break;
            case 403:
                this.message = "You do not have the required access"
                break;
            case 409:
                this.message = "Duplicated Error"
                break;
            case 500:
                this.message = "Error In Server"
                break;
            default:
                break;
        }
    }
}


export const Get = async (action) => {
    let response = await axios.get(baseURL + action.url).catch(err => {
       
        throw new ServerHandlerError(err);
    });

    if (response)
        return response.data

    return null;
}

export const Post = async (action, data) => {

    let formData = new FormData();

    for (let key in data) {
        formData.append(key, data[key]);
    }


    let response = await axios.post(baseURL + action.url, formData, {
        headers: { "Content-Type": "multipart/form-data" }
    }).catch(err => {
        throw new ServerHandlerError(err);
    });

    if (response)
        return response.data

    return null;
}

export const Put = async (action, data) => {

    let formData = new FormData();

    for (let key in data) {
        formData.append(key, data[key]);
    }


    let response = await axios.put(baseURL + action.url, formData, {
        headers: { "Content-Type": "multipart/form-data" }
    }).catch(err=>{
        throw new ServerHandlerError(err);
    });

    if (response)
        return response.data

    return null;
}

export const Remove = async (action, ids) => {

    return await axios.delete(baseURL + action.url + "/" + Object.values(ids).join("/")).catch(err=>{
        throw new ServerHandlerError(err);
    });
}
