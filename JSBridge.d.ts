declare namespace MobileCRM {
    let bridge: any;

    interface AboutInfo {
        manufacturer: string;
        productTitle: string;
        productTitleAndVersion: string;
        productSubTitle: string;
        poweredBy: string;
        icon: string;
        website: string;
        supportEmail: string;
    }

    namespace AboutInfo {
        function requestObject(callbackFn:  CallBack<AboutInfo>, errorCallbackFn: CallBack<string>): void;
    }

    namespace Application {
        function checkUserRoles(roles: string[], successFn: CallBack<number>, errorCallbackFn: CallBack<string>, scope: any): void;
        function createDirectory(path: string, successFn: CallBack<any>, failed: CallBack<string>, scope: any): void;
        function deleteDirectory(path: string, successFn: CallBack<any>, failed: CallBack<string>, scope: any): void;
        function deleteFile(path: string, successFn: CallBack<any>, failed: CallBack<string>, scope: any): void;
        function directoryExists(path: string, successFn: CallBack<boolean>, failed: CallBack<string>, scope: any): void;
        function fileExists(path: string, successFn: CallBack<boolean>, failed: CallBack<string>, scope: any): void;
        function getAppColor(colName: string, successFn: CallBack<string>, failed: CallBack<string>, scope: any): void;
        function getAppImage(imageName: string, colorize: string, successFn: CallBack<string>, failed: CallBack<string>, scope: any): void;
        function getDirectories(path: string, successFn: CallBack<string[]>, failed: CallBack<string>, scope: any): void;
        function getFiles(path: string, successFn: CallBack<string[]>, failed: CallBack<string>, scope: any): void;
        function moveFile(src: string, dst: string, successFn: CallBack<any>, failed: CallBack<string>, scope: any): void;
        function readFile(path: string, successFn: CallBack<string>, failed: CallBack<string>, scope: any): void;
        function readFileAsBase64(path: string, successFn: CallBack<string>, failed: CallBack<string>, scope: any): void;
        function synchronize(backgroundOnly: boolean, ifNotSyncedBefore: Date): void;
        function synchronizeOnForeground(forceLogin: boolean): void;
        function writeFile(path: string, text: string, append: boolean, successFn: CallBack<any>, failedFn: CallBack<string>, scope: any): void;
        function writeFileFromBase64(path: string, base64: string, successFn: EmptyCallBack, failedFn: CallBack<string>, scope: any): void;
        function writeFileWithEncoding(path: string, text: string, encoding: string, append: boolean, successFn: EmptyCallBack, failedFn: CallBack<string>, scope: any): void;
    }

    class Bridge {
        public platform: string;
        public version: number;
        alert(callback: CallBack<any>, scope: any): void;
        closeForm(): void;
        enableDebug(callback: CallBack<any>, errorCallback: CallBack<string>, scope: any): void;        
        enableZoom(enable: boolean): void;
        getWindowSize(callback: CallBack<{width: number, height: number}>, errorCallback: CallBack<string>, scope: any): void;     
        log(text: string): void;
        onGlobalEvent(eventName: string, handler: CallBack<any>, bind: boolean, scope: any): void;
        raiseGlobalEvent(eventName: string, args: any): void;
    }

    interface CultureInfo {
        
    }
    
    class DateTimeFormat {

    }

    class DynamicEntity {

    }

    class Localization {

    }

    class ManyToManyReference {

    }

    class MetaEntity {

    }

    class MetaProperty {

    }

    class Metadata {

    }

    class MobileReport {

    }

    class NumberFormat {

    }

    class ObservableObject {

    }

    class Platform {

    }

    class Questionnaire {

    }

    class Reference {

    }

    class Relationship {

    }

    class _DeviceInfo {

    }

    class _Settings {
        systemUserId: string;
    }

    namespace Configuration {
        function requestObject(callbackFn: CallBack<_Settings>, errorCallbackFn: CallBack<string>, scope: any): void;
    }

    interface Configuration {
        applicationEdition: string;
        applicationPath: string;
        applicationVersion: string;
        customizationDirectory: string;
        externalConfiguration: string;
        isBackgroundSync: boolean;
        isOnline: boolean;
        legacyVersion: string;
        licenseAlert: string;
        settings: _Settings;
        storageDirectory: string;
    }

    namespace FetchXml.Fetch {
        function executeFromXML(fetchXmlData: string, successFn: CallBack<Entity>, errorFn: CallBack<string>, scope: any): void;
    }

    namespace UI {
        namespace DetailViewItems {

        }

        interface Form {

        }

        namespace IFrameForm {
            function onSave(handler: CallBack<IFrameForm>, bind: boolean, scope: any): void;
            function preventClose(warningMessage: string | null): void;
            function requestObject(callbackFn: CallBack<IFrameForm>, errorCallbackFn: CallBack<string>, scope: any): void;
            function setDirty(): void;
            function show(caption: string, url: string, maximized: boolean, options: any): void;
            function showModal(caption: string, url: string, options: any): void;
        }

        interface IFrameForm {
            form: Form;
            isDirty: boolean;
            options: any;
            preventCloseMessage: string;
            saveBehavior: number;
            suspendSave(): any;
        }
    }



    namespace Services {

    }

    namespace FetchXml {
        class Attribute {

        }

        class Condition {

        }

        class Entity {

        }

        class Fetch {

        }

        class Filter {

        }

        class LinkEntity {

        }
    }
}

type CallBack<T> = (arg1: T) => void;
type EmptyCallBack = () => void;
