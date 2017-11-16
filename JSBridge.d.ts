declare namespace MobileCRM {
    namespace Configuration {
        function requestObject(callbackFn: (config: Configuration) => void, errorCallbackFn: (errorMessage: string) => void, scope: Object): void;
    }

    interface Configuration {
        systemUserId: string;
    }

    namespace FetchXml.Fetch {
        function executeFromXML(fetchXmlData: string, successFn: (result: any) => void, errorFn: (error: any) => void, scope: any): void;
    }
}
