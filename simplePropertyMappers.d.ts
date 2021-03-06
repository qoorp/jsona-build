import { IModelPropertiesMapper, IJsonPropertiesMapper, TAnyKeyValueObject, TJsonaModel, TJsonaRelationships, TJsonaRelationshipBuild, IJsonApiRelationLinks } from './JsonaTypes';
export declare const RELATIONSHIP_NAMES_PROP = "relationshipNames";
export declare class ModelPropertiesMapper implements IModelPropertiesMapper {
    getId(model: TJsonaModel): any;
    getType(model: TJsonaModel): any;
    getAttributes(model: TJsonaModel): {};
    getRelationships(model: TJsonaModel): {};
}
export declare function defineRelationGetter(model: any, relationName: any, buildRelation: TJsonaRelationshipBuild): void;
export declare class JsonPropertiesMapper implements IJsonPropertiesMapper {
    createModel(type: string): TJsonaModel;
    setId(model: TJsonaModel, id: string | number): void;
    setAttributes(model: TJsonaModel, attributes: TAnyKeyValueObject): void;
    setMeta(model: TJsonaModel, meta: TAnyKeyValueObject): void;
    setRelationships(model: TJsonaModel, relationships: TJsonaRelationships): void;
    setRelationshipLinks(parentModel: TJsonaModel, relationName: string, links: IJsonApiRelationLinks): void;
}
