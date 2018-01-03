export class RescoService {
    /**
     * MobileCRM.Configuration.requestObject
     */
    public getConfiguration(): Promise<MobileCRM.Configuration> {
        return new Promise(
            (resolve, reject) => {
                MobileCRM.Configuration.requestObject(
                    config => resolve(config),
                    errorMsg => reject(errorMsg), 
                    null);
            });
    }
}