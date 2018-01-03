export interface IModelPropertiesMapper {
    getId(model: TJsonaModel): string | number;
    getType(model: TJsonaModel): string;
    getAttributes(model: TJsonaModel): TAnyKeyValueObject;
    getRelationships(model: TJsonaModel): TJsonaRelationships;
}
export interface IJsonPropertiesMapper {
    createModel(type: string): TJsonaModel;
    setId(model: TJsonaModel, id: string | number): void;
    setAttributes(model: TJsonaModel, attributes: TAnyKeyValueObject): void;
    setMeta(model: TJsonaModel, meta: TAnyKeyValueObject): void;
    setRelationships(model: TJsonaModel, relationships: TJsonaRelationships): void;
    setRelationshipLinks(parentModel: TJsonaModel, relationName: string, links: IJsonApiRelationLinks): void;
}
export interface IJsonaModelBuilder {
    build(): TJsonaModel | Array<TJsonaModel>;
}
export declare type TAnyKeyValueObject = {
    [key: string]: any;
};
export declare type TJsonApiBody = {
    data?: TJsonApiData | TJsonApiData[];
    included?: Array<TJsonApiData>;
};
export declare type TJsonApiData = {
    type: string;
    id?: string | number;
    attributes?: TAnyKeyValueObject;
    meta?: TAnyKeyValueObject;
    relationships?: TJsonApiRelationships;
};
export declare type TJsonApiRelationshipData = {
    type: string;
    id: string | number;
};
export declare type TJsonApiRelation = {
    data: TJsonApiRelationshipData | Array<TJsonApiRelationshipData>;
    links?: IJsonApiRelationLinks;
};
export declare type IJsonApiRelationLinks = {
    self: string;
    related: string;
};
export declare type TJsonApiRelationships = {
    [relationName: string]: TJsonApiRelation;
};
export declare type TJsonaUniqueIncluded = {
    [entityTypeId: string]: TJsonApiData;
};
/**
 * TJsonaDenormalizedIncludeNames example:
 * 'user.town.country'
 */
export declare type TJsonaIncludeNamesChain = string;
/**
 * TJsonaDenormalizedIncludeNames example:
 * ['user', 'user.town', 'user.town.country', 'comments', 'comments.author']
 */
export declare type TJsonaDenormalizedIncludeNames = Array<TJsonaIncludeNamesChain>;
/**
 * TJsonaNormalizedIncludeNamesTree example:
 * {
 *  user: {
 *      town: {
 *          country: null
 *      }
 *  comments: {
 *      author: null
 *  }
 */
export declare type TJsonaNormalizedIncludeNamesTree = {
    [relationName: string]: null | TJsonaNormalizedIncludeNamesTree;
};
export declare type TJsonaModel = {
    [propertyName: string]: any;
};
export declare type TJsonaRelationshipBuild = () => (TJsonaModel | Array<TJsonaModel>);
export declare type TJsonaRelationships = {
    [relationName: string]: TJsonaRelationshipBuild | TJsonaModel | Array<TJsonaModel>;
};
export declare type TReduxObject = {
    [entityType: string]: {
        [entityId: string]: TReduxObjectModel;
    };
};
export declare type TReduxObjectModel = {
    id: number | string;
    attributes?: TAnyKeyValueObject;
    relationships?: TJsonApiRelationships;
};
export declare type TReduxObjectRelation = {
    data: {
        id: string | Array<string>;
        type: string;
    };
};
