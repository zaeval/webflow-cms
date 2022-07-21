const token = "01f9c53d94237d09d1991deef1b98a1bf932c4cdf6156c66280fe900620bf84e";
const Webflow = require("webflow-api");
const webflow = new Webflow({
    token: token,
});

class WebflowTheCompass{
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
        return await webflow.collections({siteId: siteId});
    }
    async getItemByName (collections, name){
        return collections.find((collection)=>{return collection.name == name})
    }
}

const setup = async () => {
    const webflowTheCompass = new WebflowTheCompass(token)
    const sites = await webflowTheCompass.getSites();
    console.log(sites);
    let collectionss = await webflowTheCompass.getCollections(sites[0]);
    const item = await webflowTheCompass.getItemByName(collectionss,"UserCounts");
    console.log(item);

    const info = await webflow.info();
    const collections = await webflow.collections({siteId: info.sites[0]});
    const items = await collections[0].items();
    console.log(items.items[1]);
    webflow.updateItem({
            itemId: items.items[0]._id,
            collectionId: collections[0]._id,
            fields: {
                count: 120,
                _archived: items.items[0]._archived,
                _draft: false,
                name: items.items[0].name,
                slug: items.items[0].slug
            }
        },{live:true}
    )

}
setup();



// export function updateUserData(data){
//     webflow.updateItem(data);
// }
// webflow.sites().then((info)=>console.log("sites",info));

// site id 갖고오는 것
// const request = require('request');
//
// const options = {
//     method: 'GET',
//     url: 'https://api.webflow.com/sites',
//     headers: {Authorization: `Bearer ${token}`}
// };
//
// request(options, function (error, response, body) {
//     if (error) throw new Error(error);
//
//     console.log(body);
// });
///////
// const options = {
//     method: 'POST',
//     url: 'https://api.webflow.com/collections/580e63fc8c9a982ac9b8b745/items/580e64008c9a982ac9b8b754',
//     qs: {live: 'true'},
//     headers: {
//         Authorization: 'Bearer f59af068fe413228c66d5722ccb992136c1df32d8b100d1c5e969a4146a7e07b',
//         'content-type': 'application/json'
//     },
//     method: 'PUT',
//     url: 'https://api.webflow.com/collections/580e63fc8c9a982ac9b8b745/items/580e64008c9a982ac9b8b754',
//     qs: {live: 'true'},
//     headers: {
//         Authorization: 'Bearer f59af068fe413228c66d5722ccb992136c1df32d8b100d1c5e969a4146a7e07b',
//         'content-type': 'application/json'
//     },
//     body: {
//         fields: {
//             validations: {
//                 messages: {
//                     maxLength: 'Must be less than 256 characters',
//                     pattern: 'Must be alphanumerical and not contain any spaces or special characters'
//                 },
//                 pattern: {},
//                 maxLength: 256
//             },
//             id: '2d829c8278655f2cd5f1299566990432',
//             unique: true,
//             editable: true,
//             required: true,
//             type: 'PlainText',
//             slug: 'slug',
//             name: 'Slug'
//         }
//     },
//     json: true
// };
//
// request(options, function (error, response, body) {
//     if (error) throw new Error(error);
//
//     console.log(body);
// });
