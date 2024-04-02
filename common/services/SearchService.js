
import { ApiHelper } from "../helpers/ApiHelper.js";
import { EnviromentConfig } from "../config/envConfig.js";

const envConfig = new EnviromentConfig();
export class SearchService extends ApiHelper{

    constructor(){
        super();
        this.searchUrl = `${envConfig.testOpsApiUrl}/v${envConfig.version}/search`; 
    }
   
    search(body){
        return this.post(this.searchUrl, envConfig.token , body);
    }
}