export class RescoService {
    /**
     * MobileCRM.Configuration.requestObject
     */
    public getConfiguration(): Promise<MobileCRM._Settings> {
        return new Promise(
            (resolve, reject) => {
                MobileCRM.Configuration.requestObject(
                    config => resolve(config),
                    errorMsg => reject(errorMsg), 
                    null);
            });
    }
}