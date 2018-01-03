import { IJsonPropertiesMapper, TJsonaModel, TJsonaRelationships, TJsonApiBody, TJsonApiData, IJsonaModelBuilder } from '../JsonaTypes';
declare class JsonDeserializer implements IJsonaModelBuilder {
    protected pm: IJsonPropertiesMapper;
    protected body: any;
    protected includedInObject: any;
    protected cachedModels: {};
    constructor(propertiesMapper: any);
    setPropertiesMapper(pm: any): void;
    setJsonParsedObject(body: TJsonApiBody): void;
    build(): TJsonaModel | Array<TJsonaModel>;
    buildModelByData(data: TJsonApiData): TJsonaModel;
    buildRelationsByData(data: TJsonApiData): TJsonaRelationships | null;
    buildDataFromIncluded(id: string | number, type: string): TJsonApiData;
    buildIncludedInObject(): {
        [key: string]: TJsonApiData;
    };
}
export default JsonDeserializer;
