"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var JsonDeserializer = /** @class */ (function () {
    function JsonDeserializer(propertiesMapper) {
        this.cachedModels = {};
        this.setPropertiesMapper(propertiesMapper);
    }
    JsonDeserializer.prototype.setPropertiesMapper = function (pm) {
        this.pm = pm;
    };
    JsonDeserializer.prototype.setJsonParsedObject = function (body) {
        this.body = body;
    };
    JsonDeserializer.prototype.build = function () {
        var data = this.body.data;
        var staff;
        if (Array.isArray(data)) {
            staff = [];
            var collectionLength = data.length;
            for (var i = 0; i < collectionLength; i++) {
                if (data[i]) {
                    var model = this.buildModelByData(data[i]);
                    if (model) {
                        staff.push(model);
                    }
                }
            }
        }
        else if (data) {
            staff = this.buildModelByData(data);
        }
        return staff;
    };
    JsonDeserializer.prototype.buildModelByData = function (data) {
        // checks for built model in cachedModels is a protection from creating models on recursive relationships
        var entityKey = data.type + "-" + data.id;
        var model = this.cachedModels[entityKey];
        if (!model) {
            model = this.pm.createModel(data.type);
            if (model) {
                this.cachedModels[entityKey] = model;
                this.pm.setId(model, data.id);
                if (data.attributes) {
                    this.pm.setAttributes(model, data.attributes);
                }
                if (data.meta) {
                    this.pm.setMeta(model, data.meta);
                }
                var relationships = this.buildRelationsByData(data);
                if (relationships) {
                    this.pm.setRelationships(model, relationships);
                }
            }
        }
        return model;
    };
    JsonDeserializer.prototype.buildRelationsByData = function (data) {
        var readyRelations = {};
        if (data.relationships) {
            for (var k in data.relationships) {
                var relation = data.relationships[k];
                if (Array.isArray(relation.data)) {
                    readyRelations[k] = [];
                    var relationItemsLength = relation.data.length;
                    for (var i = 0; i < relationItemsLength; i++) {
                        var dataItem = this.buildDataFromIncluded(relation.data[i].id, relation.data[i].type);
                        readyRelations[k].push(this.buildModelByData(dataItem));
                    }
                }
                else if (relation.data) {
                    var dataItem = this.buildDataFromIncluded(relation.data.id, relation.data.type);
                    readyRelations[k] = this.buildModelByData(dataItem);
                }
            }
        }
        if (Object.keys(readyRelations).length) {
            return readyRelations;
        }
        return null;
    };
    JsonDeserializer.prototype.buildDataFromIncluded = function (id, type) {
        var included = this.buildIncludedInObject();
        var dataItem = included[type + id];
        if (dataItem) {
            return dataItem;
        }
        else {
            return { id: id, type: type };
        }
    };
    JsonDeserializer.prototype.buildIncludedInObject = function () {
        if (!this.includedInObject) {
            this.includedInObject = {};
            if (this.body.included) {
                var includedLength = this.body.included.length;
                for (var i = 0; i < includedLength; i++) {
                    var item = this.body.included[i];
                    this.includedInObject[item.type + item.id] = item;
                }
            }
        }
        return this.includedInObject;
    };
    return JsonDeserializer;
}());
exports.default = JsonDeserializer;
//# sourceMappingURL=JsonDeserializer.js.map