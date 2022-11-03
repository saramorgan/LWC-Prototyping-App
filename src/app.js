import { LightningElement , api } from "lwc";

const productData = [
	{
		"Id": "Product2Ref1",
		"ProductCode": "2540L",
		"Family": "Backpacks",
		"Name": "Backpack with gear",
		"MSRP__c": 179.95,
    "Picture_URL__c": "https://saramorgandotnet.files.wordpress.com/2022/09/backbackwithgear.png",
		"Description": "Meet the pack that does it all. The Flex Capacitor family of packs feature adjustable volume to handle both short and long hauls, and a Y flex suspension system that carries above their weight class."
	},
	{
		"Id": "Product2Ref2",
		"ProductCode": "M25666",
		"Family": "Boots",
		"Name": "Wonens Euro Hiker Boots",
		"MSRP__c": 120.99,
    "Picture_URL__c": "https://saramorgandotnet.files.wordpress.com/2022/09/womenseuroboots.png",
		"Description": "There's no better (or more handsome) boot for warmer-weather hikes and everyday adventures. Our classic leather Euro Hiker boots are cushiony and built to grip terrain, whether it's a rocky trail, a shag carpet or a city sidewalk."
	},
	{
		"Id": "Product2Ref3",
		"ProductCode": "55L567",
		"Family": "Backpacks",
		"Name": "Far Out Hiking Backpack",
    "Picture_URL__c": "https://saramorgandotnet.files.wordpress.com/2022/09/hikingbackpack.png",
		"MSRP__c": 109.99,
		"Description": "Gear up for your next big hike with the JanSport Far Out 55L Hiking Backpack. Constructed with ripstop polyester material, this backpack withstands the wear and tear from hiking in the elements. The sizeable main compartment gives you plenty of storage space for your gear, including a full-size sleeping bag. The padded air-mesh harness system provides breathable comfort, and the trekking pole and ice axe attachment points allow you to safely carry all of your supplies."
	}
 ];

export default class ProductList extends LightningElement {
	@api
	searchable;
	@api
	recordId;
	@api
	objectApiName;
	
	products = productData;

}
