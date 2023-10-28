import WebflowCMS from "./webflow-cms/src";

const setup = async () => {
    const webflowCMS = new WebflowCMS(token)
    const sites = await webflowCMS.getSites();
    // console.log(sites);
    let collections = await webflowCMS.getCollections(sites[0]);
    // console.log(collections)
    const collection = await webflowCMS.getCollectionByName(collections, "ImageBlock");
    console.log(collection._id);
    const items = await webflowCMS.getItems(collection)
    console.log(items);
    console.log(await webflowCMS.getItemByName(collection,"f1385854-15a0-4c5d-82c2-48e6df0c079a"))
    // const item = await webflowCMS.createItem(collection._id,{name:"testitem2",slug:"testitem2",testnumber:1234,_draft: false,_archived: false,})
}
setup();
