const Webflow = require("webflow-api");
const fetch = require('node-fetch');

export default class WebflowCMS{
    constructor(token) {
        this.webflow = new Webflow({
            token:token
        })
        this.token = token
    }
    async getSites(){
        return (await this.webflow.info()).sites;
    }
    async  getCollections (siteId){
        return await this.webflow.collections({siteId: siteId});
    }
    async getCollectionByName (collections, name){
        return collections.find((collection)=>{return collection.name == name})
    }
    async getItems(collection){
        return (await collection.items()).items;
    }
    async getItemByName (collection,name){
        return (await collection.items()).items.find((item)=>{return item.name == name})
    }
    async updateItem(itemId,collectionId, data){
        return await this.webflow.updateItem({
            itemId: itemId,
            collectionId: collectionId,
            fields: data
        },{live:true});
    }
    async createItem(collectionId,data){
        return await this.webflow.createItem({
            collectionId:collectionId,
            fields:data
        },{live:true})
    }
}