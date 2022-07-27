import Webflow from "webflow-api";

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
    async getItemsByName (collection,name){
        return (await collection.items()).items.find((item)=>{return item.name == name})
    }
    async updateItem(itemId,collectionId, data){
        console.log(await this.webflow.updateItem({
            itemId: itemId,
            collectionId: collectionId,
            fields: data
        },{live:true}));
    }
    async createItem(collectionId,data){
        await this.webflow.createItem({
            collectionId:collectionId,
            fields:data
        },{live:true})
    }
}
// window.WebflowCMS = WebflowCMS;
