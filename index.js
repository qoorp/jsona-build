"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Jsona_1 = require("./Jsona");
exports.Jsona = Jsona_1.default;
var ModelsSerializer_1 = require("./builders/ModelsSerializer");
exports.ModelsSerializer = ModelsSerializer_1.default;
var JsonDeserializer_1 = require("./builders/JsonDeserializer");
exports.JsonDeserializer = JsonDeserializer_1.default;
var simplePropertyMappers_1 = require("./simplePropertyMappers");
exports.ModelPropertiesMapper = simplePropertyMappers_1.ModelPropertiesMapper;
exports.JsonPropertiesMapper = simplePropertyMappers_1.JsonPropertiesMapper;
exports.default = Jsona_1.default;
//# sourceMappingURL=index.js.map