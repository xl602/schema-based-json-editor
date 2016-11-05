/* tslint:disable:only-arrow-functions */
/* tslint:disable:no-unused-new */
/* tslint:disable:object-literal-shorthand */
"use strict";
exports.editor = {
    template: "\n    <div>\n        <object-editor v-if=\"schema.type === 'object'\"\n            :schema=\"schema\"\n            :initial-value=\"initialValue\"\n            :title=\"title\"\n            :theme=\"theme\"\n            :locale=\"locale\"\n            :icon=\"icon\"\n            :required=\"required\"\n            @updateValue=\"$emit('updateValue', arguments[0])\"\n            @onDelete=\"$emit('onDelete')\"\n            :has-delete-button=\"hasDeleteButton\">\n        </object-editor>\n        <array-editor v-if=\"schema.type === 'array'\"\n            :schema=\"schema\"\n            :initial-value=\"initialValue\"\n            :title=\"title\"\n            :theme=\"theme\"\n            :locale=\"locale\"\n            :icon=\"icon\"\n            :required=\"required\"\n            @updateValue=\"$emit('updateValue', arguments[0])\"\n            @onDelete=\"$emit('onDelete')\"\n            :has-delete-button=\"hasDeleteButton\">\n        </array-editor>\n        <number-editor v-if=\"schema.type === 'number' || schema.type === 'integer'\"\n            :schema=\"schema\"\n            :initial-value=\"initialValue\"\n            :title=\"title\"\n            :theme=\"theme\"\n            :locale=\"locale\"\n            :icon=\"icon\"\n            :required=\"required\"\n            @updateValue=\"$emit('updateValue', arguments[0])\"\n            @onDelete=\"$emit('onDelete')\"\n            :has-delete-button=\"hasDeleteButton\">\n        </number-editor>\n        <boolean-editor v-if=\"schema.type === 'boolean'\"\n            :schema=\"schema\"\n            :initial-value=\"initialValue\"\n            :title=\"title\"\n            :theme=\"theme\"\n            :locale=\"locale\"\n            :icon=\"icon\"\n            :required=\"required\"\n            @updateValue=\"$emit('updateValue', arguments[0])\"\n            @onDelete=\"$emit('onDelete')\"\n            :has-delete-button=\"hasDeleteButton\">\n        </boolean-editor>\n        <null-editor v-if=\"schema.type === 'null'\"\n            :schema=\"schema\"\n            :initial-value=\"initialValue\"\n            :title=\"title\"\n            :theme=\"theme\"\n            :locale=\"locale\"\n            :icon=\"icon\"\n            :required=\"required\"\n            @updateValue=\"$emit('updateValue', arguments[0])\"\n            @onDelete=\"$emit('onDelete')\"\n            :has-delete-button=\"hasDeleteButton\">\n        </null-editor>\n        <string-editor v-if=\"schema.type === 'string'\"\n            :schema=\"schema\"\n            :initial-value=\"initialValue\"\n            :title=\"title\"\n            :theme=\"theme\"\n            :locale=\"locale\"\n            :icon=\"icon\"\n            :required=\"required\"\n            @updateValue=\"$emit('updateValue', arguments[0])\"\n            @onDelete=\"$emit('onDelete')\"\n            :has-delete-button=\"hasDeleteButton\">\n        </string-editor>\n    </div>\n    ",
    props: ["schema", "initialValue", "title", "theme", "icon", "locale", "readonly", "required", "hasDeleteButton"],
};
//# sourceMappingURL=editor.js.map