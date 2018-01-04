

declare namespace MobileCRM {
    let bridge: any;

    class Reference {
        constructor(entityName: string, id: string, primaryName: string);

        public entityName: string;
        public id: string;
        public isNew: boolean;
        public primaryName: string;

        public toString(): string;
    }

    namespace Reference {
        function loadById(entityName: string, id: string, success: CallBack<Reference>, failed: CallBack<string>, scope: any): void;
    }


    class DynamicEntity extends Reference {
        constructor(entityName: string, id?: string, primaryName?: string, properties?: PropertiesType, isOnline?: boolean);

        public isOnline: string;
        public properties: PropertiesType;
        public save(errorFn: CallBack<string | null>, forceMode?: boolean): void;
    }

    namespace DynamicEntity {
        function createNew(entityName: string, id?: string, primaryName?: string, properties?: PropertiesType): DynamicEntity;
        function deleteById(entityName: string, id: string, successFn: () => void, failedFn: CallBack<string>, scope?: any): void;
        function downloadAttachment(entityName: string, id: string, successFn: CallBack<string>, failedFn: CallBack<string>, scope: any): void;
        function loadById(entityName: string, id: string, successFn: CallBack<DynamicEntity>, failedFn: CallBack<string>, scope: any): void;
        function loadDocumentBody(entityName: string, id: string, successFn: CallBack<string>, failedFn: CallBack<string>, scope: any): void;
        function saveDocumentBody(entityId: string, entityName: string, relationShip: Relationship, filePath: string, mimeType: string, success: CallBack<Reference>, failed: CallBack<string>, scope: any): void;
        function unzipDocumentBody(entityName: string, id: string, targetDir: string, success: CallBack<string>, failed: CallBack<string>, scope: any): void;
    }

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
        function requestObject(callbackFn: CallBack<AboutInfo>, errorCallbackFn: CallBack<string>): void;
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
        getWindowSize(callback: CallBack<{ width: number, height: number }>, errorCallback: CallBack<string>, scope: any): void;
        log(text: string): void;
        onGlobalEvent(eventName: string, handler: CallBack<any>, bind: boolean, scope: any): void;
        raiseGlobalEvent(eventName: string, args: any): void;
    }

    interface CultureInfo {
        name: string;
        displayName: string;
        nativeName: string;
        ISOName: string;
        isRightToLeft: boolean;
        dateTimeFormat: DateTimeFormat;
        numberFormat: NumberFormat;
    }

    namespace CultureInfo {
        function formatDate(date: Date, format: string): string;
        function fullDateTimeString(date: Date): string;
        function initialize(callbackFn: CallBack<CultureInfo>, errorCallbackFn: CallBack<string>, scope: any): void;
        function load(culture: string, callbackFn: CallBack<CultureInfo>, errorCallbackFn: CallBack<string>, scope: any): void;
        function longDateString(date: Date): string;
        function longTimeString(date: Date): string;
        function monthDayString(date: Date): string;
        function shortDateString(date: Date): string;
        function shortTimeString(date: Date): string;
        function yearMonthString(date: Date): string;
    }

    class DateTimeFormat {

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

    class Relationship {
        constructor(sourceProperty: string, target: Reference, intersectEntity?: string, intersectProperty?: string);

        public sourceProperty: string;
        public target: Reference;
        public intersectEntity: string;
        public intersectProperty: string;
    }

    class _DeviceInfo {

    }

    class _Settings {
        systemUserId: string;
    }

    namespace Configuration {
        function requestObject(callbackFn: CallBack<Configuration>, errorCallbackFn: CallBack<string>, scope: any): void;
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

        namespace FormManager {
            function showNewDialog(entityName: string, relationShip?: Relationship | null, options?: any);
        }

        interface EntityForm {
            associatedViews: Array<_EntityList>;
            canEdit: boolean;
            canClose: boolean;
            context: OnChangeContext | OnSaveContext;
            controllers: Array<_Controller>;
            detailViews: Array<_DetailView>
            entity: DynamicEntity;
            form: Form;
            iFrameOptions: any;
            isDirty: boolean;
            relationship: Relationship;
            visible: boolean;
        }

        namespace EntityForm {
            function getDetailView(name: string): _DetailView;
        }

        interface _DetailView {
            isDirty: boolean;
            isEnabled: boolean;
            isVisible: boolean;
            items: Array<_DetailItem>;
            name: string;
            getItemByName(name: string): _DetailItem;
        }

        interface _DetailItem {

        }

        interface _Controller {
            isDirty: boolean;
            isLoaded: boolean;
            view: _View;
        }

        interface _View {
            isVisible: boolean; 
            name: string;
        }

        interface OnChangeContext {
            changedItem: string;
        }

        interface OnSaveContext {
            errorMessage: string;
        }

        namespace EntityForm {
            function requestObject(callback: CallBack<EntityForm>, errorMsg?: CallBack<string>, scope?: any);
            function saveAndClose(): void;
        }

        interface _EntityList {

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
type PropertiesType = { [key: string]: any; };