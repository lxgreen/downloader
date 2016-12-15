var credentials = require("api_key.json");
var Flickr = require("flickrapi");

Flickr.authenticate(credentials, function(error, flickr) {
	if(!error){
		var albums = flickr.collections.getTree({});

		}
	}
	else{
	}
});

/**
 * flickr.photos.getSizes(api_key, photo_id) returns:
		   { "sizes": { "canblog": 1, "canprint": 1, "candownload": 1,
		    "size": [
		      { "label": "Square", "width": 75, "height": 75, "source": "https:\/\/farm3.staticflickr.com\/2815\/9214770336_5dbba9f6fe_s.jpg", "url": "https:\/\/www.flickr.com\/photos\/lxgreen\/9214770336\/sizes\/sq\/", "media": "photo" },
		      { "label": "Large Square", "width": "150", "height": "150", "source": "https:\/\/farm3.staticflickr.com\/2815\/9214770336_5dbba9f6fe_q.jpg", "url": "https:\/\/www.flickr.com\/photos\/lxgreen\/9214770336\/sizes\/q\/", "media": "photo" },
		      { "label": "Thumbnail", "width": 100, "height": 56, "source": "https:\/\/farm3.staticflickr.com\/2815\/9214770336_5dbba9f6fe_t.jpg", "url": "https:\/\/www.flickr.com\/photos\/lxgreen\/9214770336\/sizes\/t\/", "media": "photo" },
		      { "label": "Small", "width": "240", "height": "135", "source": "https:\/\/farm3.staticflickr.com\/2815\/9214770336_5dbba9f6fe_m.jpg", "url": "https:\/\/www.flickr.com\/photos\/lxgreen\/9214770336\/sizes\/s\/", "media": "photo" },
		      { "label": "Small 320", "width": "320", "height": "180", "source": "https:\/\/farm3.staticflickr.com\/2815\/9214770336_5dbba9f6fe_n.jpg", "url": "https:\/\/www.flickr.com\/photos\/lxgreen\/9214770336\/sizes\/n\/", "media": "photo" },
		      { "label": "Medium", "width": "500", "height": "282", "source": "https:\/\/farm3.staticflickr.com\/2815\/9214770336_5dbba9f6fe.jpg", "url": "https:\/\/www.flickr.com\/photos\/lxgreen\/9214770336\/sizes\/m\/", "media": "photo" },
		      { "label": "Medium 640", "width": "640", "height": "361", "source": "https:\/\/farm3.staticflickr.com\/2815\/9214770336_5dbba9f6fe_z.jpg", "url": "https:\/\/www.flickr.com\/photos\/lxgreen\/9214770336\/sizes\/z\/", "media": "photo" },
		      { "label": "Medium 800", "width": "800", "height": "451", "source": "https:\/\/farm3.staticflickr.com\/2815\/9214770336_5dbba9f6fe_c.jpg", "url": "https:\/\/www.flickr.com\/photos\/lxgreen\/9214770336\/sizes\/c\/", "media": "photo" },
		      { "label": "Large", "width": "1024", "height": "577", "source": "https:\/\/farm3.staticflickr.com\/2815\/9214770336_5dbba9f6fe_b.jpg", "url": "https:\/\/www.flickr.com\/photos\/lxgreen\/9214770336\/sizes\/l\/", "media": "photo" },
		      { "label": "Large 1600", "width": "1600", "height": "902", "source": "https:\/\/farm3.staticflickr.com\/2815\/9214770336_dd7b35bfbb_h.jpg", "url": "https:\/\/www.flickr.com\/photos\/lxgreen\/9214770336\/sizes\/h\/", "media": "photo" },
		      { "label": "Large 2048", "width": "2048", "height": "1155", "source": "https:\/\/farm3.staticflickr.com\/2815\/9214770336_0f4894185e_k.jpg", "url": "https:\/\/www.flickr.com\/photos\/lxgreen\/9214770336\/sizes\/k\/", "media": "photo" },
		      { "label": "Original", "width": "3264", "height": "1840", "source": "https:\/\/farm3.staticflickr.com\/2815\/9214770336_e497e1cc7d_o.jpg", "url": "https:\/\/www.flickr.com\/photos\/lxgreen\/9214770336\/sizes\/o\/", "media": "photo" }
		    ] }, "stat": "ok" }
 */