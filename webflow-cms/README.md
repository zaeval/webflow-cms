#동작 설명
## 0. setup token
토큰을 webflow 에서 발급받아야함
1. Webflow project setting에 접속
2. integration 탭에 접속
3. api token 발급

## 1. get site
collection을 가져오려면 site의 ID가 필요함.
그래서 site를 먼저 가져와야함

## 2. get collection
collection의 인자로 site id가 필요하고
collection의 id를 토대로 item들을 가져올 수 있음.

## 3. get item
item의 인자로 collection id가 필요하고
item들의 값을 가져올 수 있음.
item의 값을 변경하려면 item의 id와 collection id가 필요함.


# 예제
```js
import WebflowCMS from "./webflow-cms/bin";
const token = "YOUR WEBFLOW TOKEN";

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

```