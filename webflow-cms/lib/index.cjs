"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Webflow = require("webflow-api");

module.exports = function () {
    function WebflowCMS(token) {
        _classCallCheck(this, WebflowCMS);

        this.webflow = new Webflow({
            token: token
        });
        this.token = token;
    }

    _createClass(WebflowCMS, [{
        key: "getSites",
        value: async function getSites() {
            return (await this.webflow.info()).sites;
        }
    }, {
        key: "getCollections",
        value: async function getCollections(siteId) {
            return await this.webflow.collections({ siteId: siteId });
        }
    }, {
        key: "getCollectionByName",
        value: async function getCollectionByName(collections, name) {
            return collections.find(function (collection) {
                return collection.name == name;
            });
        }
    }, {
        key: "getItems",
        value: async function getItems(collection) {
            return (await collection.items()).items;
        }
    }, {
        key: "getItemsByName",
        value: async function getItemsByName(collection, name) {
            return (await collection.items()).items.find(function (item) {
                return item.name == name;
            });
        }
    }, {
        key: "updateItem",
        value: async function updateItem(itemId, collectionId, data) {
            console.log((await this.webflow.updateItem({
                itemId: itemId,
                collectionId: collectionId,
                fields: data
            }, { live: true })));
        }
    }, {
        key: "createItem",
        value: async function createItem(collectionId, data) {
            await this.webflow.createItem({
                collectionId: collectionId,
                fields: data
            }, { live: true });
        }
    }]);

    return WebflowCMS;
}();
// window.WebflowCMS = WebflowCMS;