import WebflowCMS from "./webflow-cms/bin";
const token = "612ce0d9fb3db1aa4f76de760bb3df0d270a17164873c97d0cabac8810c39bb7";

const setup = async () => {
    const webflowCMS = new WebflowCMS(token)
    const sites = await webflowCMS.getSites();
    console.log(sites);
    let collections = await webflowCMS.getCollections(sites[0]);
    console.log(collections)
    const collection = await webflowCMS.getCollectionByName(collections,"TestCollections");
    console.log(collection._id);
    const items = await webflowCMS.getItems(collection)
    console.log(items);
    const item = await webflowCMS.createItem(collection._id,{name:"testitem2",slug:"testitem2",testnumber:1234,_draft: false,_archived: false,})
}
setup();
