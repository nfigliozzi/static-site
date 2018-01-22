//Global Content functions
function getContent(config, callback){
  var accessToken = "4b56e62f783bcd65022c6573daffc250d521c0a702f2b7dc40e16125d0d15906",
  space = "swxdzv5xwwu7",
  contentfulUrl = "https://cdn.contentful.com/spaces/"+space+"/entries?content_type="+config.content+"&order=fields.order&access_token="+accessToken;

  $.get( contentfulUrl, function( data ) {
    config.assets = data.includes?data.includes.Asset:false;
    config.items = data.items;
    
    config.ammount = limitAmmount(config.ammount, data.items.length);

    createTemplate(config);
    if (callback){callback(config.ammount);}
  });
};
function createTemplate(c){
  var html = ""

  for (var i = 0; i < c.ammount; i++) {
    if (c.items[i]) {
      html += c.template(c.assets, c.items[i].fields);
    }
  }

  $(c.place).prepend( html );
};
function limitAmmount(ca, il){
  switch(ca) {
    case "even":
      return Math.floor(il / 2) * 2;
    default:
      if (isNaN( ca )){
        return il;
      }
    return ca
  }
}
function getPhotoUrl(assets, id) {
  if(!id){ return false }
  var foundIndex = -1;
  for (var index = 0; index < assets.length; index++) {
    if (assets[index].sys.id === id.sys.id) {
      foundIndex = index;
      break;
    }
  }
  if (foundIndex != -1){return assets[foundIndex].fields.file.url;}else{return ""}
 };