import { TJsonaModel, TJsonApiBody, TJsonApiData, TJsonaDenormalizedIncludeNames, TJsonaNormalizedIncludeNamesTree, TJsonaUniqueIncluded, IModelPropertiesMapper } from '../JsonaTypes';
declare class ModelsSerializer {
    protected propertiesMapper: IModelPropertiesMapper;
    protected staff: TJsonaModel | Array<TJsonaModel>;
    protected includeNamesTree: TJsonaNormalizedIncludeNamesTree;
    constructor(propertiesMapper?: IModelPropertiesMapper);
    setPropertiesMapper(propertiesMapper: IModelPropertiesMapper): void;
    setStuff(staff: any): void;
    setIncludeNames(includeNames: TJsonaDenormalizedIncludeNames | TJsonaNormalizedIncludeNamesTree): void;
    build(): TJsonApiBody;
    buildDataByModel(model: TJsonaModel | null): TJsonApiData;
    buildRelationshipsByModel(model: TJsonaModel): {};
    buildIncludedByModel(model: TJsonaModel, includeTree: TJsonaNormalizedIncludeNamesTree, builtIncluded?: TJsonaUniqueIncluded): void;
    buildIncludedItem(relationModel: TJsonaModel, subIncludeTree: TJsonaNormalizedIncludeNamesTree, builtIncluded: TJsonaUniqueIncluded): void;
}
export default ModelsSerializer;
