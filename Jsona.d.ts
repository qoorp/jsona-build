import { IModelPropertiesMapper, IJsonPropertiesMapper, TJsonaDenormalizedIncludeNames, TJsonaNormalizedIncludeNamesTree, TJsonaModel, TJsonApiBody, TReduxObject } from './JsonaTypes';
declare class Jsona {
    modelPropertiesMapper: IModelPropertiesMapper;
    jsonPropertiesMapper: IJsonPropertiesMapper;
    constructor(params?: {
        modelPropertiesMapper: IModelPropertiesMapper;
        jsonPropertiesMapper: IJsonPropertiesMapper;
    });
    /**
     * serialize
     * Creates JSON, compatible with json:api specification from Jsona model(s).
     */
    serialize({stuff, includeNames}: {
        stuff: TJsonaModel | Array<TJsonaModel>;
        includeNames?: TJsonaDenormalizedIncludeNames | TJsonaNormalizedIncludeNamesTree;
    }): TJsonApiBody;
    /**
     * deserialize
     * Creates Jsona model(s) from JSON, compatible with json:api specification.
     */
    deserialize(body: TJsonApiBody | string): TJsonaModel | Array<TJsonaModel>;
    /**
     * denormalizeReduxObject
     * Creates Jsona model(s) from ReduxObject, that creates by json-api-normalizer
     * https://github.com/yury-dymov/json-api-normalizer
     *
     */
    denormalizeReduxObject({reduxObject, entityType, entityIds, returnBuilderInRelations}: {
        reduxObject: TReduxObject;
        entityType: string;
        entityIds?: string | Array<string>;
        returnBuilderInRelations?: boolean;
    }): null | TJsonaModel | Array<TJsonaModel>;
}
export default Jsona;
